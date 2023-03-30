using Cinema.Persistence.Interfaces;
using Cinema.Persistence.Repositories;

namespace Cinema.Persistence.Data;

public class RepositoryManager : IRepositoryManager
{
    private readonly RepositoryContext _repositoryContext;
    private readonly Lazy<ICinemaRepository> _cinemaRepository;

    // Lazy implementation for all db sets

    public RepositoryManager(RepositoryContext repositoryContext)
    {
        _repositoryContext = repositoryContext;

        _cinemaRepository = new Lazy<ICinemaRepository>(() =>
            new CinemaRepository(repositoryContext));
    }

    public ICinemaRepository Cinema => _cinemaRepository.Value;
    public async Task SaveAsync() => await _repositoryContext.SaveChangesAsync();
}
