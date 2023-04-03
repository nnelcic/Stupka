﻿using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class UserRepository : RepositoryBase<User>, IUserRepository
{
    public UserRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {
    }

    public async Task<List<User>> GetAllUsersAsync()
    {
        return await FindAll()
            .Include(x => x.Role)
            .OrderBy(x => x.LastName)
            .ThenBy(x => x.FirstName)
            .ToListAsync();
    }

    public async Task<User?> GetUserAsync(int id, bool trackChanges = false)
    {
        return await FindByCondition(x => x.Id == id, trackChanges)
            .Include(x => x.Role)
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
}