namespace Cinema.Persistence.Interfaces;

public interface IRepositoryManager
{
    ICinemaRepository Cinema { get; }
    IUserRepository User { get; }
    ISeanseRepository Seanse { get; }
    IPromocodeRepository Promocode { get; }
    IMovieRepository Movie { get; }
    Task SaveAsync();
}
