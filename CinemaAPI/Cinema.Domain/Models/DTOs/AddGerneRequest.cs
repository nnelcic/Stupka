namespace Cinema.Domain.Models.DTOs;

public class AddGerneRequest
{
    public string Name { get; set; }

    public ICollection<AddMovieGerneRequest> GenreRequests { get; set; }
}
