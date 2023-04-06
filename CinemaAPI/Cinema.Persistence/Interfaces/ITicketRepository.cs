using Cinema.Domain.Models.Entities;

namespace Cinema.Persistence.Interfaces;

public interface ITicketRepository
{
    Task<List<Ticket>> GetAllTicketsAsync();
}
