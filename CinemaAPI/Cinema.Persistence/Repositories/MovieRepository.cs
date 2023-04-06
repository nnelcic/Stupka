using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;

namespace Cinema.Persistence.Repositories;

public class MovieRepository : RepositoryBase<Movie>, IMovieRepository
{
    public MovieRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {}

    public async Task<List<Movie>> GetAllMoviesInfoAsync()
    {
        return await _repositoryContext.Movies
            .Include(x => x.MovieDetails)
            .Include(x => x.MovieType)
            .Include(x => x.MovieGenres)
                .ThenInclude(x => x.Genre)
            .OrderBy(x => x.Title)
            .ToListAsync();
    }

    public async Task<List<Movie>> GetAllMoviesAsync()
    {
        return await FindAll().OrderBy(x => x.Title).ToListAsync();
    }

    public async Task<Movie?> GetMovieAsync(int id, bool trackChanges = false)
    {
        return await FindByCondition(x => x.Id == id, trackChanges)
            .SingleOrDefaultAsync();
    }

    public async Task<Movie?> GetMovieInfoAsync(int id)
    {
        return await _repositoryContext.Movies
            .Include(x => x.MovieDetails)
            .Include(x => x.MovieGenres)
                .ThenInclude(x => x.Genre)
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Movie?> GetMovieByTittleAsync(string tittle)
    {
        return await FindByCondition(x => x.Title == tittle, false)
            .SingleOrDefaultAsync();
    }
    
    public void CreateMovie(Movie movie)
        => Create(movie);
    public void DeleteMovie(Movie movie)
        => Delete(movie);
    
}
