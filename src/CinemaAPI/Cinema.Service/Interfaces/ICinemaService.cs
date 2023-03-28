using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface ICinemaService
{
    Task<List<CinemaViewModel>> GetAllAsync();
    Task<CinemaViewModel?> GetAsync(int id);
    Task<CinemaViewModel?> AddAsync(AddCinemaRequest addCinemaRequest);
    Task<CinemaViewModel?> UpdateAsync(int id, UpdateCinemaRequest updateCinemaRequest);
    Task<CinemaViewModel?> DeleteAsync(int id);
}