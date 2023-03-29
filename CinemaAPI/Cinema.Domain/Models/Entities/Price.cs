namespace Cinema.Domain.Models.Entities;

public class Price
{
    public int Id { get; set; }
    public decimal Cost { get; set; }
    // Navigation property
    public int SeatTypeId { get; set; }
    public SeatType SeatType { get; set; }
}