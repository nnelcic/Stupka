namespace Cinema.Domain.Models.ViewModels;

public class PurchaseViewModel
{
    public int Id { get; set; }
    public DateTime PurchaseDate { get; set; }

    // Navigation property
    public int UserDetailsId { get; set; }
    public int PromocodeId { get; set; }
    public PromocodeViewModel Promocode { get; set; }
    public ICollection<TicketViewModel> Tickets { get; set; }
}
