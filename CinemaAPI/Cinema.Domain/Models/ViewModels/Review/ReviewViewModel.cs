namespace Cinema.Domain.Models.ViewModels;

public class ReviewViewModel
{
    public int Id { get; set; }
    public string Description { get; set; }
    public double Rate { get; set; }
    // Navigation property
    public int MovieDetailsId { get; set; }
}
