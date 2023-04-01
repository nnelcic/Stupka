namespace Cinema.Persistence.Interfaces;

public interface IPromocodeRepository
{
    Task<List<Domain.Models.Entities.Promocode>> GetAllPromocodeAsync();
    Task<Domain.Models.Entities.Promocode?> GetPromocodeAsync(int id, bool trackChanges = false);
    void CreatePromocode(Domain.Models.Entities.Promocode promocode);
    void DeletePromocode(Domain.Models.Entities.Promocode promocode);
}
