using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class PurchaseRepository : RepositoryBase<Purchase>, IPurchaseRepository
{
    public PurchaseRepository(RepositoryContext repositoryContext) 
        : base(repositoryContext)
    { }

    public void CreatePurchase(Purchase purchase)
        => Create(purchase);

    public void DeletePurchase(Purchase purchase)
        => Delete(purchase);

    public async Task<List<Purchase>> GetAllPurchasesAsync()
        => await FindAll()
            .AsNoTracking()
            .OrderByDescending(x => x.PurchaseDate)
            .ToListAsync();

    public async Task<Purchase?> GetPurchaseAsync(int id, bool trackChanges = false)
        => await FindByCondition(x => x.Id == id, trackChanges)
            .AsNoTracking().FirstOrDefaultAsync();
}
