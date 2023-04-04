using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface IUserService
{
    Task<IEnumerable<UserViewModel>> GetAllAsync();
    Task<UserInfoViewModel> GetInfoAsync(int id);
    Task<UserViewModel> GetAsync(int id);
    Task<UserViewModel> AddAsync(AddUserRequest addUserRequest);
    Task UpdateAsync(int id, UpdateUserRequest updateUserRequest);
    Task DeleteAsync(int id);
}