using Cinema.Domain.Models.Entities;
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
    private readonly Lazy<IUserRefreshTokenRepository> _refreshTokenRepository;
    private readonly Lazy<IPurchaseRepository> _purchaseRepository;
    private readonly Lazy<IMovieGenreRepository> _movieGenreRepository;
    private readonly Lazy<ITicketRepository> _ticketRepository;    

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

        _refreshTokenRepository = new Lazy<IUserRefreshTokenRepository>(() => 
            new UserRefreshTokenRepository(repositoryContext));

        _purchaseRepository = new Lazy<IPurchaseRepository>(() =>
            new PurchaseRepository(repositoryContext));

        _movieGenreRepository = new Lazy<IMovieGenreRepository>(() =>
        new MovieGenreRepository(repositoryContext));

        _ticketRepository = new Lazy<ITicketRepository>(() =>
            new TicketRepository(repositoryContext));
        
    }

    public ICinemaRepository Cinema => _cinemaRepository.Value;
    public IMovieRepository Movie => _movieRepository.Value;
    public IPriceRepository Price => _priceRepository.Value;
    public IHallRepository Hall => _hallRepository.Value;
    public ISeatRepository Seat => _seatRepository.Value;
    public IUserRepository User => _userRepository.Value;
    public ISeanseRepository Seanse => _seanseRepository.Value;
    public IPromocodeRepository Promocode => _promocodeRepository.Value;
    public IUserRefreshTokenRepository RefreshToken => _refreshTokenRepository.Value;
    public IPurchaseRepository Purchase => _purchaseRepository.Value;   
    public IMovieGenreRepository MovieGenre => _movieGenreRepository.Value;
    public ITicketRepository Ticket => _ticketRepository.Value;
    public async Task SaveAsync() => await _repositoryContext.SaveChangesAsync();
}
