using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class HallService : IHallService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public HallService(IRepositoryManager repository, ILoggerManager loggerManager, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
        _loggerManager = loggerManager;
    }

    public async Task<HallViewModel> AddAsync(AddHallWithCinemaIdRequest addHallRequest)
    {
        var hall = _mapper.Map<Hall>(addHallRequest);

        var existingCinema = await _repository.Cinema.GetCinemaAsync(addHallRequest.CinemaId);
        if (existingCinema is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new BadRequestException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Cinema)
                , addHallRequest.CinemaId));
        }

        var existingHall = await _repository.Hall.GetHallByNumberAsync(hall.HallNumber);
        if (existingHall is not null)
        {
            _loggerManager.LogError(ConstError.EXISTING_ENTITY);
            throw new BadRequestException(ConstError.GetErrorForExistingElement(nameof(Hall)));
        }

        _repository.Hall.CreateHall(hall);
        await _repository.SaveAsync();

        hall = await _repository.Hall.GetHallInfoAsync(hall.Id);

        var hallToReturn = _mapper.Map<HallViewModel>(hall);

        return hallToReturn;
    }

    public async Task DeleteAsync(int id)
    {
        var hall = await _repository.Hall.GetHallAsync(id);

        if (hall is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Hall), id));
        }

        _repository.Hall.DeleteHall(hall);
        await _repository.SaveAsync();
    }

    public async Task<IEnumerable<HallViewModel>> GetAllAsync()
    {
        var halls = await _repository.Hall.GetAllHallInfoAsync();

        return _mapper.Map<List<HallViewModel>>(halls);
    }

    public async Task<HallViewModel> GetAsync(int id)
    {
        var hall = await _repository.Hall.GetHallInfoAsync(id);

        if (hall is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Hall), id));
        }

        return _mapper.Map<HallViewModel>(hall);
    }

    public async Task UpdateAsync(int id, UpdateHallWithCinemaIdRequest updateHallRequest)
    {
        var existingCinema = await _repository.Cinema.GetCinemaAsync(updateHallRequest.CinemaId);
        if (existingCinema is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Cinema)
                , updateHallRequest.CinemaId));
        }

        var hallEntity = await _repository.Hall.GetHallAsync(id, true);
        if (hallEntity is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Hall), id));
        }

        _mapper.Map(updateHallRequest, hallEntity);
        await _repository.SaveAsync();
    }
}
