using Cinema.Domain.Models.Entities;

namespace Cinema.Persistence.Interfaces;

public interface IMovieGenreRepository
{
    Task<MovieGenre?> GetMovieGenreAsync(int id, bool trackChanges = false);
    void CreateMovieGenre(MovieGenre movieGenre);
    void DeleteMovieGenre(MovieGenre movieGenre);
}
