using Cinema.Domain.Models.Entities;
using Cinema.Domain.RequestFeatures;

namespace Cinema.Persistence.Interfaces;

public interface IMovieRepository
{
    Task<PagedList<Movie>> GetAllMoviesAsync(MovieParameters movieParameters);
    Task<Movie?> GetMovieAsync(int id, bool trackChanges = false);
    Task<Movie?> GetMovieInfoAsync(int id, bool trackChanges = false);    
    Task<Movie?> GetMovieByTittleAsync(string tittle);
    void CreateMovie(Movie movie);
    void DeleteMovie(Movie movie);
}
