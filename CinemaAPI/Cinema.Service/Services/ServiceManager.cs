using AutoMapper;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class ServiceManager : IServiceManager
{
    private readonly Lazy<IMovieService> _movieService;
    private readonly Lazy<ICinemaService> _cinemaService;
    private readonly Lazy<IUserService> _userService;
    private readonly Lazy<ISeanseService> _seanseService;
    private readonly Lazy<IPriceService> _priceService;
    private readonly Lazy<IHallService> _hallService;
    private readonly Lazy<ISeatService> _seatService;
    private readonly Lazy<IPromocodeService> _promocodeService;

    public ServiceManager(IRepositoryManager repositoryManager, ILoggerManager logger, IMapper autoMapper)
    {
        _movieService = new Lazy<IMovieService>(() => new MovieService(repositoryManager, logger, autoMapper));
        _priceService = new Lazy<IPriceService>(() => new PriceService(repositoryManager, logger, autoMapper));
        _hallService = new Lazy<IHallService>(() => new HallService(repositoryManager, logger, autoMapper));
        _seatService = new Lazy<ISeatService>(() => new SeatService(repositoryManager, logger, autoMapper));
        _cinemaService = new Lazy<ICinemaService>(() => new CinemaService(repositoryManager, logger, autoMapper));
        _userService = new Lazy<IUserService>(() => new UserService(repositoryManager, logger, autoMapper));
        _seanseService = new Lazy<ISeanseService>(() => new SeanseService(repositoryManager, logger, autoMapper));
        _promocodeService = new Lazy<IPromocodeService>(() => new PromocodeService(repositoryManager, logger, autoMapper));
    }

    public IMovieService MovieService => _movieService.Value;
    public ICinemaService CinemaService => _cinemaService.Value;
    public IPriceService PriceService => _priceService.Value;
    public IHallService HallService => _hallService.Value;
    public ISeatService SeatService => _seatService.Value;
    public IUserService UserService => _userService.Value;
    public ISeanseService SeanseService => _seanseService.Value;
    public IPromocodeService PromocodeService => _promocodeService.Value;
}
