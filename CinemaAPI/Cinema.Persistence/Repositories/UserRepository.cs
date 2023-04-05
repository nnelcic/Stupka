using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class UserRepository : RepositoryBase<User>, IUserRepository
{
    public UserRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    { }

    public async Task<List<User>> GetAllUsersAsync()
    {
        return await FindAll()
            .Include(x => x.Role)
            .Include(x => x.UserRefreshToken)
            .OrderBy(x => x.LastName)
            .ThenBy(x => x.FirstName)
            .ToListAsync();
    }

    public async Task<User?> GetUserAsync(int id, bool trackChanges = false)
    {
        return await FindByCondition(x => x.Id == id, trackChanges)
            .Include(x => x.Role)
            .Include(x => x.UserRefreshToken)
            .FirstOrDefaultAsync();
    }

    public void CreateUser(User user)
    {
        Create(user);
    }

    public void DeleteUser(User user)
    {
        Delete(user);
    }

    public async Task<User?> GetUserInfoAsync(int id)
        => await FindByCondition(x => x.Id == id, false)
            .Include(x => x.Role)
                .Include(x => x.UserDetails)
                    .ThenInclude(x => x.Reviews)
                .Include(x => x.UserDetails)
                    .ThenInclude(x => x.Favourites)
            .FirstOrDefaultAsync();
}