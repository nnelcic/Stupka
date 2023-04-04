using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class SeatService : ISeatService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public SeatService(IRepositoryManager repository, ILoggerManager loggerManager, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
        _loggerManager = loggerManager;
    }

    public async Task<SeatViewModel> AddAsync(AddSeatWithHallIdRequest addSeatRequest)
    {
        var seat = _mapper.Map<Seat>(addSeatRequest);

        var existingHall = await _repository.Hall.GetHallAsync(addSeatRequest.HallId);
        if (existingHall is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new BadRequestException(ConstError.GetErrorForException(nameof(Hall), addSeatRequest.HallId));
        }

        var existingSeat = await _repository.Seat.GetSeatByNumberAndRowAsync(seat.SeatNumber, seat.Row, seat.HallId);
        if (existingSeat is not null)
        {
            _loggerManager.LogError(ConstError.EXISTING_ENTITY);
            throw new BadRequestException(ConstError.GetErrorForExistingElement(nameof(Seat)));
        }

        _repository.Seat.CreateSeat(seat);
        await _repository.SaveAsync();

        seat = await _repository.Seat.GetSeatAsync(seat.Id);

        var seatToReturn = _mapper.Map<SeatViewModel>(seat);

        return seatToReturn;
    }

    public async Task DeleteAsync(int id)
    {
        var seat = await _repository.Seat.GetSeatAsync(id);

        if (seat is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Seat), id));
        }

        _repository.Seat.DeleteSeat(seat);
        await _repository.SaveAsync();
    }

    public async Task<IEnumerable<SeatViewModel>> GetAllAsync()
    {
        var seats = await _repository.Seat.GetAllSeatsAsync();

        return _mapper.Map<List<SeatViewModel>>(seats);
    }

    public async Task<SeatViewModel> GetAsync(int id)
    {
        var seat = await _repository.Seat.GetSeatAsync(id);
        if (seat is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Seat), id));
        }

        return _mapper.Map<SeatViewModel>(seat);
    }

    public async Task UpdateAsync(int id, UpdateSeatWithHallIdRequest updateSeatRequest)
    {
        var existingHall = await _repository.Hall.GetHallAsync(updateSeatRequest.HallId);
        if (existingHall is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new BadRequestException(ConstError.GetErrorForException(nameof(Hall)
                , updateSeatRequest.HallId));
        }

        var seatEntity = await _repository.Seat.GetSeatAsync(id, true);
        if (seatEntity is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Seat), id));
        }

        _mapper.Map(updateSeatRequest, seatEntity);
        await _repository.SaveAsync();
    }
}
