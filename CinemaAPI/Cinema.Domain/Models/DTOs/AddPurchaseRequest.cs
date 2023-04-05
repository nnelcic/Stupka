namespace Cinema.Domain.Models.DTOs;

public class AddPurchaseRequest
{
    // Navigation property
    public int UserDetailsId { get; set; }
    public string Promocode { get; set; }
    public ICollection<AddTicketRequest> Tickets { get; set; }
}
