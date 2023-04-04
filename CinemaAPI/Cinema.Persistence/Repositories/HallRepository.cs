using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class HallRepository : RepositoryBase<Hall>, IHallRepository
{
    public HallRepository(RepositoryContext repositoryContext)
        : base(repositoryContext)
    { }

    public async Task<Hall?> GetHallAsync(int id, bool trackChanges = false)
        => await FindByCondition(x => x.Id == id, trackChanges).SingleOrDefaultAsync();

    public void CreateHall(Hall hall)
        => Create(hall);

    public void DeleteHall(Hall hall)
        => Delete(hall);

    public async Task<List<Hall>> GetAllHallInfoAsync()
        => await _repositoryContext
            .Halls
            .Include(x => x.Seats)
            .ThenInclude(x => x.SeatType)
            .AsNoTracking()
            .ToListAsync();

    public async Task<Hall?> GetHallInfoAsync(int id)
        => await _repositoryContext
            .Halls
            .Include(x => x.Seats)
            .ThenInclude(x => x.SeatType)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id);

    public async Task<Hall?> GetHallByNumberAsync(int num)
        => await FindByCondition(x => x.HallNumber == num, false).SingleOrDefaultAsync();
}
