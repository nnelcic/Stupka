using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface IMovieGenreService
{
    Task<MovieGenreViewModel> GetAsync(int id);
    Task<MovieGenreViewModel> AddAsync(AddMovieGenreRequest addMovieGenreRequest);
    Task UpdateAsync(int id, UpdateMovieGenreRequest updateMovieGenreRequest);
    Task DeleteAsync(int id);
}
