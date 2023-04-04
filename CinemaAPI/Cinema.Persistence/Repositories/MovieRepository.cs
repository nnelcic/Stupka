﻿using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;

namespace Cinema.Persistence.Repositories;

public class MovieRepository : RepositoryBase<Domain.Models.Entities.Movie>, IMovieRepository
{
    public MovieRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {}

    public async Task<List<Movie>> GetAllMoviesInfoAsync()
    {
        return await FindAll()
            .Include(x => x.MovieDetails)
                .ThenInclude(x => x.PhaseId)
            .Include(x => x.MovieGenres)
                .ThenInclude(x => x.Genre)
            .OrderBy(x => x.Title)
            .ToListAsync();
    }

    public async Task<Movie?> GetMovieInfoAsync(int id)
    {
        return await FindByCondition(x => x.Id == id, false)
            .Include(x => x.MovieDetails)
                .ThenInclude(x => x.PhaseId)
            .Include(x => x.MovieGenres)
                .ThenInclude(x => x.Genre)
            .FirstOrDefaultAsync();
    }

    public async Task<Movie?> GetMovieByTittleAsync(string tittle)
    {
        return await FindByCondition(x => x.Title == tittle, false)
            .SingleOrDefaultAsync();
    }

    public async Task<Movie?> GetMovieAsync(int id, bool trackChanges = false)
    {
        return await FindByCondition(x => x.Id == id, trackChanges)
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
