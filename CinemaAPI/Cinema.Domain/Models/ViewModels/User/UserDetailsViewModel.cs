namespace Cinema.Domain.Models.ViewModels;

public class UserDetailsViewModel
{
    public int Id { get; set; }
    // Navigation property
    public ICollection<ReviewViewModel> Reviews { get; set; }
    public ICollection<FavouriteViewModel> Favourites { get; set; }
    public ICollection<PurchaseViewModel> Purchase { get; set; }
}
