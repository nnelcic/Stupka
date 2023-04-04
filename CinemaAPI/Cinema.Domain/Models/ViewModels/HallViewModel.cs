namespace Cinema.Domain.Models.ViewModels;

public class HallViewModel
{
    public int Id { get; set; }
    public int HallNumber { get; set; }
    public ICollection<SeatViewModel> Seats { get; set; }
}
