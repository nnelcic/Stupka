namespace Cinema.Domain.Models.DTOs;

public  class AddTicketRequest
{
    public int SeanseId { get; set; }
    public int SeatId { get; set; }
    public int PurchaseId { get; set; }
    public int PriceId { get; set; }
}
