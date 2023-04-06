using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Repositories;

public class TicketRepository : RepositoryBase<Ticket>, ITicketRepository
{
    public TicketRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    { }

    public async Task<List<Ticket>> GetAllTicketsAsync()
        => await FindAll()
            .Include(x => x.Seanse) 
            .Include(x => x.Seat)
            .ToListAsync();
}
