using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class CinemaRepository : ICinemaRepository
{
    private readonly CinemaDbContext _dbContext;

    public CinemaRepository(CinemaDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Domain.Models.Entities.Cinema>> GetAllAsync()
    {
        return await _dbContext.Cinemas.ToListAsync();
    }

    public async Task<Domain.Models.Entities.Cinema?> GetAsync(int id)
    {
        return await _dbContext.Cinemas.FindAsync(id);
    }

    public async Task<Domain.Models.Entities.Cinema?> AddAsync(Domain.Models.Entities.Cinema cinema)
    {
        if (cinema is null) return default;
        await _dbContext.Cinemas.AddAsync(cinema);
        await _dbContext.SaveChangesAsync();
        return cinema;
    }

    public async Task<Domain.Models.Entities.Cinema?> UpdateAsync(int id, Domain.Models.Entities.Cinema cinema)
    {
        if (cinema is null) return default;

        var cinemaForUpdate = await _dbContext.Cinemas.FindAsync(id);
        if (cinemaForUpdate is null) return default;
        
        cinemaForUpdate.Name = cinema.Name;
        cinemaForUpdate.Address = cinema.Address;
        cinemaForUpdate.City = cinema.City;
        cinemaForUpdate.Email = cinema.Email;
        cinemaForUpdate.PhoneNumber = cinema.PhoneNumber;

        await _dbContext.SaveChangesAsync();
        return cinemaForUpdate;
    }

    public async Task<Domain.Models.Entities.Cinema?> DeleteAsync(int id)
    {
        var cinema = await _dbContext.Cinemas.FindAsync(id);
        if (cinema is null) return default;

        _dbContext.Remove(cinema);
        await _dbContext.SaveChangesAsync();
        return cinema;
    }
}