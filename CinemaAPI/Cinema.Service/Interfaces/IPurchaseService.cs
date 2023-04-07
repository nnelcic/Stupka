using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface IPurchaseService
{
    Task<IEnumerable<PurchaseViewModelShort>> GetAllAsync();
    Task<PurchaseViewModel> GetAsync(int id);
    Task<PurchaseViewModel> AddAsync(AddPurchaseRequest addPurchaseRequest);
    Task DeleteAsync(int id);
}
