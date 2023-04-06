using Cinema.Domain.Models.ViewModels;

namespace Cinema.Service.Interfaces;

public interface ITicketService
{
    Task<IEnumerable<TicketViewModel>> GetAllAsync();
}
