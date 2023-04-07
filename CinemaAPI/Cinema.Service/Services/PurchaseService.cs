using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class PurchaseService : IPurchaseService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;
    private readonly IServiceManager _serviceManager;

    public PurchaseService(IRepositoryManager repository, ILoggerManager loggerManager, 
        IMapper mapper, IServiceManager serviceManager)
    {
        _repository = repository;
        _loggerManager = loggerManager;
        _mapper = mapper;
        _serviceManager = serviceManager;
    }

    public async Task<PurchaseViewModel> AddAsync(AddPurchaseRequest addPurchaseRequest)
    {
        await IsValidSeats(addPurchaseRequest);

        var purchase = await CalculatePromocode(addPurchaseRequest);

        purchase = await CalculateSum(purchase);

        purchase.PurchaseDate = DateTime.UtcNow;

        _repository.Purchase.CreatePurchase(purchase);
        await _repository.SaveAsync();

        purchase = await _repository.Purchase.GetPurchaseAsync(purchase.Id);
        var purchaseToReturn = _mapper.Map<PurchaseViewModel>(purchase);

        return purchaseToReturn;
    }

    public async Task DeleteAsync(int id)
    {
        var purchase = await _repository.Purchase.GetPurchaseAsync(id);

        if (purchase is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Purchase), id));
        }

        _repository.Purchase.DeletePurchase(purchase);
        await _repository.SaveAsync();
    }

    public async Task<IEnumerable<PurchaseViewModelShort>> GetAllAsync()
    {
        var purchase = await _repository.Purchase.GetAllPurchasesAsync();

        return _mapper.Map<List<PurchaseViewModelShort>>(purchase);
    }

    public async Task<PurchaseViewModel> GetAsync(int id)
    {
        var purchase = await _repository.Purchase.GetPurchaseAsync(id);

        if (purchase is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Purchase), id));
        }

        return _mapper.Map<PurchaseViewModel>(purchase);
    }

    private async Task<Purchase> CalculateSum(Purchase purchase)
    {
        foreach (var ticket in purchase.Tickets)
        {
            var seat = await _repository.Seat.GetSeatAsync(ticket.SeatId);
            if (seat is null)
            {
                _loggerManager.LogError(ConstError.ERROR_BY_ID);
                throw new NotFoundException(ConstError.GetErrorForException(nameof(Seat), ticket.SeatId));
            }

            var seanse = await _repository.Seanse.GetSeanseAsync(ticket.SeanseId);
            if (seanse is null)
            {
                _loggerManager.LogError(ConstError.ERROR_BY_ID);
                throw new NotFoundException(ConstError.GetErrorForException(nameof(Seanse), ticket.SeanseId));
            }

            ticket.Price = seat.SeatType.Price + seanse.Price.Cost;
        }

        purchase.Price = purchase.Tickets.Sum(x => x.Price);
        var promocode = await _serviceManager.PromocodeService.GetAsync(purchase.PromocodeId);
        purchase.Price = ((100 - promocode.Percentage) * purchase.Price) / 100;

        return purchase;
    }

    private async Task<Purchase> CalculatePromocode(AddPurchaseRequest addPurchaseRequest)
    {
        PromocodeViewModel? promocode = null;
        if (addPurchaseRequest.Promocode != string.Empty)
            promocode = await _serviceManager.PromocodeService.GetAsync(addPurchaseRequest.Promocode);

        var purchase = _mapper.Map<Purchase>(addPurchaseRequest);

        if (promocode is not null)
            purchase.PromocodeId = promocode.Id;
        else
            purchase.PromocodeId = 1;

        return purchase;
    }

    private async Task IsValidSeats(AddPurchaseRequest addPurchaseRequest)
    {
        var tickets = await _serviceManager.TicketService.GetAllAsync();
        
        foreach (var ticket in addPurchaseRequest.Tickets)
        {
            var seat = await _serviceManager.SeatService.GetAsync(ticket.SeatId);
            if (seat is null)
            {
                _loggerManager.LogError(ConstError.ERROR_BY_ID);
                throw new NotFoundException(ConstError.GetErrorForException(nameof(Seat), ticket.SeatId));
            }

            foreach (var item in tickets)
            {
                if (item.Seanse.Id == ticket.SeanseId && item.Seat.Id == ticket.SeatId)
                {
                    _loggerManager.LogError(ConstError.ERROR_BY_ID);
                    throw new BadRequestException(ConstError.GetInvalidTicket(item.Seanse.Id, item.Seanse.Id));
                }
            }
        }
    }
}
