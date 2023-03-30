using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class CinemaService : ICinemaService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public CinemaService(IRepositoryManager repository, IMapper mapper, ILoggerManager loggerManager)
    {
        _repository = repository;
        _mapper = mapper;
        _loggerManager = loggerManager; 
    }

    public async Task<IEnumerable<CinemaViewModel>> GetAllAsync()
    {
        var cinemas = await _repository.Cinema.GetAllCinemaAsync();

        return _mapper.Map<List<CinemaViewModel>>(cinemas);
    }

    public async Task<CinemaViewModel> GetAsync(int id)
    {
        var cinema = await _repository.Cinema.GetCinemaAsync(id);

        if (cinema is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Cinema), id));
        }

        return _mapper.Map<CinemaViewModel>(cinema);
    }

    public async Task<CinemaViewModel> AddAsync(AddCinemaRequest addCinemaRequest)
    {
        var cinema = _mapper.Map<Domain.Models.Entities.Cinema>(addCinemaRequest);

        _repository.Cinema.CreateCinema(cinema);
        await _repository.SaveAsync();

        var cinemaToReturn = _mapper.Map<CinemaViewModel>(cinema);

        return cinemaToReturn;
    }

    public async Task UpdateAsync(int id, UpdateCinemaRequest updateCinemaRequest)
    {
        var cinemaEntity = await _repository.Cinema.GetCinemaAsync(id, true);

        if (cinemaEntity is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Cinema), id));
        }

        _mapper.Map(updateCinemaRequest, cinemaEntity);
        await _repository.SaveAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var cinema = await _repository.Cinema.GetCinemaAsync(id);

        if (cinema is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Cinema), id));
        }

        _repository.Cinema.DeleteCinema(cinema);
        await _repository.SaveAsync();
    }
}