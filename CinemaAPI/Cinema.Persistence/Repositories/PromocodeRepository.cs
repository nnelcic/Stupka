using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class PromocodeRepository : RepositoryBase<Domain.Models.Entities.Promocode>, IPromocodeRepository
{
    public PromocodeRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {}

    public void CreatePromocode(Promocode promocode)
        => Create(promocode);

    public void DeletePromocode(Promocode promocode)
        => Delete(promocode);

    public async Task<List<Promocode>> GetAllPromocodeAsync()
        => await FindAll().OrderBy(x => x.Id).ToListAsync();

    public async Task<Promocode?> GetPromocodeAsync(int id, bool trackChanges = false)
        => await FindByCondition(x => x.Id == id, trackChanges).SingleOrDefaultAsync();

    public async Task<Promocode?> GetPromocodeAsync(string promocode)
        => await FindByCondition(x => x.Name == promocode, false).SingleOrDefaultAsync();
}
