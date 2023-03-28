namespace Cinema.Persistence.Interfaces;

public interface ICinemaRepository
{
    Task<List<Domain.Models.Entities.Cinema>> GetAllAsync();
    Task<Domain.Models.Entities.Cinema?> GetAsync(int id);
    Task<Domain.Models.Entities.Cinema?> AddAsync(Domain.Models.Entities.Cinema cinema);
    Task<Domain.Models.Entities.Cinema?> UpdateAsync(int id, Domain.Models.Entities.Cinema cinema);
    Task<Domain.Models.Entities.Cinema?> DeleteAsync(int id);
}