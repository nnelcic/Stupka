using Cinema.Domain.Models.Entities;

namespace Cinema.Domain.Models.ViewModels;

public class MovieGenreViewModel
{
    public int MovieId { get; set; }
    public Movie Movie { get; set; }
    public int GenreId { get; set; }
    public Genre Genre { get; set; }
}
