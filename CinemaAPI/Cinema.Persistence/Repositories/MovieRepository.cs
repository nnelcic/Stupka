using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class MovieRepository : RepositoryBase<Domain.Models.Entities.Movie>, IMovieRepository
{
    public MovieRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {}
    
    public async Task<List<Movie>> GetAllMoviesAsync()
    {
        return await FindAll()
            .Include(x => x.MovieGenres)
            .OrderBy(x => x.Title)
            .ToListAsync();
    }

    public async Task<Movie?> GetMovieAsync(int id, bool trackChanges = false)
    {
        return await FindByCondition(x => x.Id == id, trackChanges)
            .Include(x => x.MovieGenres)
            .SingleOrDefaultAsync();
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
