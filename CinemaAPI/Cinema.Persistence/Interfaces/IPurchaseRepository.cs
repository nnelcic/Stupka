using Cinema.Domain.Models.Entities;

namespace Cinema.Persistence.Interfaces;

public interface IPurchaseRepository
{
    Task<List<Purchase>> GetAllPurchasesAsync();
    Task<Purchase?> GetPurchaseAsync(int id, bool trackChanges = false);
    void CreatePurchase(Purchase purchase);
    void DeletePurchase(Purchase purchase);
}
