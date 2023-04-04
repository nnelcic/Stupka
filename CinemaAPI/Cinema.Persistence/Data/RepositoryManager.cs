using Cinema.Persistence.Interfaces;
using Cinema.Persistence.Repositories;

namespace Cinema.Persistence.Data;

public class RepositoryManager : IRepositoryManager
{
    private readonly RepositoryContext _repositoryContext;
    private readonly Lazy<ICinemaRepository> _cinemaRepository;
    private readonly Lazy<IUserRepository> _userRepository;
    private readonly Lazy<ISeanseRepository> _seanseRepository;
    private readonly Lazy<IPromocodeRepository> _promocodeRepository;
    private readonly Lazy<IMovieRepository> _movieRepository;

    // Lazy implementation for all db sets

    public RepositoryManager(RepositoryContext repositoryContext)
    {
        _repositoryContext = repositoryContext;

        _cinemaRepository = new Lazy<ICinemaRepository>(() =>
            new CinemaRepository(repositoryContext));
        _userRepository = new Lazy<IUserRepository>(() => 
            new UserRepository(repositoryContext));
        _seanseRepository = new Lazy<ISeanseRepository>(() =>
           new SeanseRepository(repositoryContext));
        _promocodeRepository = new Lazy<IPromocodeRepository>(() =>
        new PromocodeRepository(repositoryContext));
        _movieRepository = new Lazy<IMovieRepository>(() =>
        new MovieRepository(repositoryContext));
    }

    public ICinemaRepository Cinema => _cinemaRepository.Value;
    public IUserRepository User => _userRepository.Value;
    public ISeanseRepository Seanse => _seanseRepository.Value;
    public IPromocodeRepository Promocode => _promocodeRepository.Value;
    public IMovieRepository Movie => _movieRepository.Value;
    public async Task SaveAsync() => await _repositoryContext.SaveChangesAsync();
}
