using Cinema.Persistence.Interfaces;
using Cinema.Persistence.Repositories;

namespace Cinema.Persistence.Data;

public class RepositoryManager : IRepositoryManager
{
    private readonly RepositoryContext _repositoryContext;
    private readonly Lazy<ICinemaRepository> _cinemaRepository;
    private readonly Lazy<IMovieRepository> _movieRepository;
    private readonly Lazy<IPriceRepository> _priceRepository;
    private readonly Lazy<IHallRepository> _hallRepository;
    private readonly Lazy<ISeatRepository> _seatRepository;
    private readonly Lazy<IUserRepository> _userRepository;
    private readonly Lazy<ISeanseRepository> _seanseRepository;
    private readonly Lazy<IPromocodeRepository> _promocodeRepository;

    public RepositoryManager(RepositoryContext repositoryContext)
    {
        _repositoryContext = repositoryContext;

        _cinemaRepository = new Lazy<ICinemaRepository>(() =>
            new CinemaRepository(repositoryContext));

        _movieRepository = new Lazy<IMovieRepository>(() =>
        new MovieRepository(repositoryContext));

        _priceRepository = new Lazy<IPriceRepository>(() =>
            new PriceRepository(repositoryContext));

        _hallRepository = new Lazy<IHallRepository>(() =>
            new HallRepository(repositoryContext));
        
        _seatRepository = new Lazy<ISeatRepository>(() =>
            new SeatRepository(repositoryContext));

        _userRepository = new Lazy<IUserRepository>(() =>
            new UserRepository(repositoryContext));

        _seanseRepository = new Lazy<ISeanseRepository>(() =>
           new SeanseRepository(repositoryContext));

        _promocodeRepository = new Lazy<IPromocodeRepository>(() =>
        new PromocodeRepository(repositoryContext));
    }

    public ICinemaRepository Cinema => _cinemaRepository.Value;
    public IMovieRepository Movie => _movieRepository.Value;
    public IPriceRepository Price => _priceRepository.Value;
    public IHallRepository Hall => _hallRepository.Value;
    public ISeatRepository Seat => _seatRepository.Value;
    public IUserRepository User => _userRepository.Value;
    public ISeanseRepository Seanse => _seanseRepository.Value;
    public IPromocodeRepository Promocode => _promocodeRepository.Value;
    public async Task SaveAsync() => await _repositoryContext.SaveChangesAsync();
}
