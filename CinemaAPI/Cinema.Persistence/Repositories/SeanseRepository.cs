using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class SeanseRepository : RepositoryBase<Seanse>, ISeanseRepository
{
    public SeanseRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {}

    public void CreateSeanse(Seanse seanse)
        => Create(seanse);

    public void DeleteSeanse(Seanse seanse)
        => Delete(seanse);

    public async Task<List<Seanse>> GetAllSeanseAsync()
        => await FindAll()
            .Include(x => x.Movie)
            .Include(x => x.Hall)
            .Include(x => x.Price)
            .OrderBy(x => x.Id)
            .ToListAsync();

    public async Task<Seanse?> GetSeanseAsync(int id, bool trackChanges = false)
        => await FindByCondition(x => x.Id == id, trackChanges)
            .Include(x => x.Movie)
            .Include(x => x.Hall)
                .ThenInclude(x => x.Seats)
                    .ThenInclude(x => x.SeatType)
            .Include(x => x.Price)
            .OrderBy(x => x.Id)
            .FirstOrDefaultAsync(x => x.Id == id);
}
