using Cinema.Domain.Models.Entities;

namespace Cinema.Persistence.Interfaces;

public interface IMovieRepository
{
    Task<List<Movie>> GetAllMoviesAsync();
    Task<Movie?> GetMovieAsync(int id, bool trackChanges = false);
    Task<Movie?> GetMovieInfoAsync(int id);    
    Task<Movie?> GetMovieByTittleAsync(string tittle);
    void CreateMovie(Movie movie);
    void DeleteMovie(Movie movie);
}
