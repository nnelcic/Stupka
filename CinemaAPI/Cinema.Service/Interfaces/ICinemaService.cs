using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface ICinemaService
{
    Task<IEnumerable<CinemaViewModel>> GetAllAsync();
    Task<CinemaViewModel> GetAsync(int id);
    Task<CinemaViewModel> AddAsync(AddCinemaRequest addCinemaRequest);
    Task UpdateAsync(int id, UpdateCinemaRequest updateCinemaRequest);
    Task DeleteAsync(int id);
}