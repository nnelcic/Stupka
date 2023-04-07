namespace Cinema.Persistence.Interfaces;

public interface ICinemaRepository
{
    Task<List<Domain.Models.Entities.Cinema>> GetAllCinemaAsync();
    Task<List<Domain.Models.Entities.Cinema>> GetAllCinemaInfoAsync();
    Task<Domain.Models.Entities.Cinema?> GetCinemaInfoAsync(int id, bool trackChanges = false);  
    Task<Domain.Models.Entities.Cinema?> GetCinemaAsync(int id, bool trackChanges = false);
    void CreateCinema(Domain.Models.Entities.Cinema cinema);
    void DeleteCinema(Domain.Models.Entities.Cinema cinema);
}