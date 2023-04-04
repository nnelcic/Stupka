using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class CinemaRepository : RepositoryBase<Domain.Models.Entities.Cinema>, ICinemaRepository
{
    public CinemaRepository(RepositoryContext repositoryContext) 
        : base(repositoryContext)
    { }

    public void CreateCinema(Domain.Models.Entities.Cinema cinema)
        => Create(cinema);

    public async Task<List<Domain.Models.Entities.Cinema>> GetAllCinemaAsync()
        => await FindAll().OrderBy(x => x.Name).ToListAsync();

    public async Task<Domain.Models.Entities.Cinema?> GetCinemaAsync(int id, bool trackChanges = false)
        => await FindByCondition(x => x.Id == id, trackChanges).SingleOrDefaultAsync();

    public void DeleteCinema(Domain.Models.Entities.Cinema cinema)
        => Delete(cinema);
    public async Task<Domain.Models.Entities.Cinema?> GetCinemaInfoAsync(int id)
        => await _repositoryContext.Cinemas
            .Include(x => x.Halls)
            .ThenInclude(x => x.Seats)
            .ThenInclude(x => x.SeatType)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id);

    public async Task<List<Domain.Models.Entities.Cinema>> GetAllCinemaInfoAsync()
        => await _repositoryContext.Cinemas
            .Include(x => x.Halls)
            .ThenInclude(x => x.Seats)
            .ThenInclude(x => x.SeatType)
            .AsNoTracking()
            .ToListAsync();
}