namespace Cinema.Domain.Models.DTOs;

public class AddHallWithCinemaIdRequest
{
    public int HallNumber { get; set; }
    public ICollection<AddSeatRequest> Seats { get; set; }
    public int CinemaId { get; set; }
}
