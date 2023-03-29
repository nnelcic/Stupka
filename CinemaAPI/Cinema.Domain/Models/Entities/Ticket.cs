using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cinema.Domain.Models.Entities;

public class Ticket
{
    public int Id { get; set; }
    // Navigation property
    public int SeanseId { get; set; }
    public Seanse Seanse { get; set; }
    public int SeatId { get; set; }
    public Seat Seat { get; set; }
    public int PurchaseId { get; set; }
    public int PriceId { get; set; }
    public Price Price { get; set; }
}