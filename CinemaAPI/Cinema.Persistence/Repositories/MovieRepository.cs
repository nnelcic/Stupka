using Cinema.Domain.Models.Entities;
using Cinema.Domain.RequestFeatures;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class MovieRepository : RepositoryBase<Movie>, IMovieRepository
{
    public MovieRepository(RepositoryContext repositoryContext) 
        : base(repositoryContext)
    { }

    public async Task<PagedList<Movie>> GetAllMoviesAsync(MovieParameters movieParameters)
    {
        var movies = await FindAll()
            .OrderBy(x => x.Title)
            .Skip((movieParameters.PageNumber - 1) * movieParameters.PageSize)
            .Take(movieParameters.PageSize)
            .ToListAsync();

        var count = await FindAll().CountAsync();
        return new PagedList<Movie>(movies, count, movieParameters.PageNumber, movieParameters.PageSize);
    }

    public async Task<Movie?> GetMovieAsync(int id, bool trackChanges = false)
    {
        return await FindByCondition(x => x.Id == id, trackChanges)
            .FirstOrDefaultAsync();
    }

    public async Task<Movie?> GetMovieInfoAsync(int id)
    {
        return await FindByCondition(x => x.Id == id, false)
            .Include(x => x.MovieDetails)
            .Include(x => x.MovieType)
            .Include(x => x.MovieGenres)
                .ThenInclude(x => x.Genre)
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Movie?> GetMovieByTittleAsync(string tittle)
    {
        return await FindByCondition(x => x.Title == tittle, false)
            .FirstOrDefaultAsync();
    }

    public void CreateMovie(Movie movie)
    {
        Create(movie);
    }

    public void DeleteMovie(Movie movie)
    {
        Delete(movie);
    }   
}
