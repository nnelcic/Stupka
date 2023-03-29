using System.ComponentModel.DataAnnotations;

namespace Cinema.Domain.Models.Entities;

public class Seat
{
    public int Id { get; set; }
    public int SeatNumber { get; set; }
    public int Row { get; set; }
    // Navigation property
    public int HallId { get; set; }
    public Hall Hall { get; set; }
    public int SeatTypeId { get; set; }
    public SeatType SeatType { get; set; }
}