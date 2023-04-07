using Cinema.Domain.Models.Entities;
using System.Text.Json.Serialization;

namespace Cinema.Domain.Models.ViewModels;

public class MovieGenreViewModel
{
    public int GenreId { get; set; }
    public string Genre { get; set; }
}
