using Cinema.Domain.Models.Entities;

namespace Cinema.Persistence.Interfaces;

public interface IMovieRepository
{
    Task<List<Movie>> GetAllMoviesAsync();
    Task<Movie?> GetMovieAsync(int id, bool trackChanges = false);
    void CreateMovie(Movie movie);
    void DeleteMovie(Movie movie);
}
