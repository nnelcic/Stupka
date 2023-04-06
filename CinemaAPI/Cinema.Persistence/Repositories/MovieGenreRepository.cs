using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class MovieGenreRepository : RepositoryBase<MovieGenre>, IMovieGenreRepository
{
    public MovieGenreRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {}

    public void CreateMovieGenre(MovieGenre movieGenre)
        => Create(movieGenre);

    public void DeleteMovieGenre(MovieGenre movieGenre)
        => Delete(movieGenre);

    public async Task<MovieGenre?> GetMovieGenreAsync(int id, bool trackChanges = false)
        => await FindByCondition(x => x.MovieId == id, trackChanges).SingleOrDefaultAsync();
}
