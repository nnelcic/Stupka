using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface IHallService
{
    Task<IEnumerable<HallViewModel>> GetAllAsync();
    Task<HallViewModel> GetAsync(int id);
    Task<HallViewModel> AddAsync(AddHallWithCinemaIdRequest addHallRequest);
    Task UpdateAsync(int id, UpdateHallWithCinemaIdRequest updateHallRequest);
    Task DeleteAsync(int id);
}
