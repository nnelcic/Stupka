using Cinema.Domain.Models.Entities;

namespace Cinema.Persistence.Interfaces;

public interface IUserRepository
{
    Task<List<User>> GetAllUsersAsync();
    Task<User?> GetUserAsync(int id, bool trackChanges = false);
    void CreateUser(User user);
    void DeleteUser(User user);
}