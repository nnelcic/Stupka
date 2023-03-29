using Cinema.Domain.Models.Enums;

namespace Cinema.Domain.Models.Entities;

public class SeatType
{
    public int Id { get; set; }
    public SeatTypeEnum Type { get; set; }
}