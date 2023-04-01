namespace Cinema.Persistence.Interfaces;

public interface ISeanseRepository
{
    Task<List<Domain.Models.Entities.Seanse>> GetAllSeanseAsync();
    Task<Domain.Models.Entities.Seanse?> GetSeanseAsync(int id, bool trackChanges = false);
    void CreateSeanse(Domain.Models.Entities.Seanse seanse);
    void DeleteSeanse(Domain.Models.Entities.Seanse seanse);
}
