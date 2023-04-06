using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;


namespace Cinema.Service.Interfaces;

public interface ISeanseService
{
    Task<IEnumerable<SeanseViewModel>> GetAllAsync();
    Task<SeanseInfoViewModel> GetAsync(int id);
    Task<SeanseViewModel> AddAsync(AddSeanseRequest addSeanseRequest);
    Task UpdateAsync(int id, UpdateSeanseRequest updateSeanseRequest);
    Task DeleteAsync(int id);
}
