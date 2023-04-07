using Cinema.Domain.Models.Entities;

namespace Cinema.Persistence.Interfaces;

public interface IMovieGenreRepository
{
    Task<MovieGenre?> GetMovieGenreAsync(int id, bool trackChanges = false);
    void CreateMovieGenres(ICollection<MovieGenre> movieGenres);
    void CreateMovieGenre(MovieGenre movieGenre);
    void DeleteMovieGenre(MovieGenre movieGenre);
}
