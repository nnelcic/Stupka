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
        PromocodeViewModel? promocode = null;
        if (addPurchaseRequest.Promocode != string.Empty)
        {
             promocode = await _serviceManager.PromocodeService
                .GetAsync(addPurchaseRequest.Promocode);
        }

        var purchase = _mapper.Map<Purchase>(addPurchaseRequest);
        if (promocode != null)
        {
            purchase.Promocode = await _repository.Promocode.GetPromocodeAsync(promocode.Id, true);
        }

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

    public async Task<IEnumerable<PurchaseViewModel>> GetAllAsync()
    {
        var purchase = await _repository.Purchase.GetAllPurchasesAsync();

        return _mapper.Map<List<PurchaseViewModel>>(purchase);
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
}
