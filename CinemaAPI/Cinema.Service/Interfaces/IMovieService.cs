using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface IMovieService
{
    Task<IEnumerable<MovieViewModel>> GetAllAsync();
    Task<IEnumerable<MovieInfoViewModel>> GetAllInfoAsync();
    Task<MovieViewModel> GetAsync(int id);
    Task<MovieDetailsViewModel> GetInfoAsync(int id);
    Task<MovieInfoViewModel> AddAsync(AddMovieRequest addMovieRequest);
    Task UpdateAsync(int id, UpdateMovieRequest updateMovieRequest);
    Task DeleteAsync(int id);
}
