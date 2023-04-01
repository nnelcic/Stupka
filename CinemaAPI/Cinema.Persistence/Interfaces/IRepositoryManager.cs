namespace Cinema.Persistence.Interfaces;

public interface IRepositoryManager
{
    ICinemaRepository Cinema { get; }
    ISeanseRepository Seanse { get; }
    Task SaveAsync();
}
