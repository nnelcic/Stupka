using AutoMapper;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class CinemaService : ICinemaService
{
    private readonly ICinemaRepository _cinemaRepository;
    private readonly IMapper _mapper;

    public CinemaService(ICinemaRepository cinemaRepository, IMapper mapper)
    {
        _cinemaRepository = cinemaRepository;
        _mapper = mapper;
    }

    public async Task<List<CinemaViewModel>> GetAllAsync()
    {
        var cinemas = await _cinemaRepository.GetAllAsync();
        return _mapper.Map<List<CinemaViewModel>>(cinemas);
    }

    public async Task<CinemaViewModel?> GetAsync(int id)
    {
        var cinema = await _cinemaRepository.GetAsync(id);
        
        if (cinema is null) return default;

        return _mapper.Map<CinemaViewModel>(cinema);
    }

    public async Task<CinemaViewModel?> AddAsync(AddCinemaRequest addCinemaRequest)
    {
        if (addCinemaRequest is null) return default;

        var cinema = _mapper.Map<Domain.Models.Entities.Cinema>(addCinemaRequest);
        cinema = await _cinemaRepository.AddAsync(cinema);
        return _mapper.Map<CinemaViewModel>(cinema);
    }

    public async Task<CinemaViewModel?> UpdateAsync(int id, UpdateCinemaRequest updateCinemaRequest)
    {
        if (updateCinemaRequest is null || id <= 0) return default;

        var cinema = _mapper.Map<Domain.Models.Entities.Cinema>(updateCinemaRequest);
        cinema = await _cinemaRepository.UpdateAsync(id, cinema);

        if (cinema is null) return default;
        
        return _mapper.Map<CinemaViewModel>(cinema);
    }

    public async Task<CinemaViewModel?> DeleteAsync(int id)
    {
        if (id <= 0) return default;

        var cinema = await _cinemaRepository.DeleteAsync(id);
        
        if (cinema is null) return default;

        return _mapper.Map<CinemaViewModel>(cinema);
    }
}