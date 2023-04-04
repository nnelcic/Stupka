namespace Cinema.Domain.Models.DTOs;

public class AddMovieRequest
{
    public string OriginalTitle { get; set; }
    public string Title { get; set; }
    public int Duration { get; set; }
    public DateTime ReleaseDate { get; set; }
    public string PosterUrl { get; set; }   
    public int MovieTypeId { get; set; }   
}
