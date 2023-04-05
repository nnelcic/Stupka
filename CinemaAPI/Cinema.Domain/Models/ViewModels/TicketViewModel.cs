using Cinema.Domain.Models.Entities;

namespace Cinema.Domain.Models.ViewModels;

public class TicketViewModel
{
    public int Id { get; set; }
    // Navigation property
    public int SeanseId { get; set; }
    public Seanse Seanse { get; set; }
    public int SeatId { get; set; }
    public Seat Seat { get; set; }
    public int PriceId { get; set; }
    public Price Price { get; set; }
}
