using AutoMapper;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class ServiceManager : IServiceManager
{
    private readonly Lazy<ICinemaService> _cinemaService;
    private readonly Lazy<IUserService> _userService;
    private readonly Lazy<ISeanseService> _seanseService;
    private readonly Lazy<IPromocodeService> _promocodeService;

    public ServiceManager(IRepositoryManager repositoryManager, ILoggerManager logger, IMapper autoMapper)
    {
        _cinemaService = new Lazy<ICinemaService>(() => new CinemaService(repositoryManager, logger, autoMapper));
        _userService = new Lazy<IUserService>(() => new UserService(repositoryManager, logger, autoMapper));
        _seanseService = new Lazy<ISeanseService>(() => new SeanseService(repositoryManager, logger, autoMapper));
        _promocodeService = new Lazy<IPromocodeService>(() => new PromocodeService(repositoryManager, logger, autoMapper));
    }

    public ICinemaService CinemaService => _cinemaService.Value;
    public IUserService UserService => _userService.Value;
    public ISeanseService SeanseService => _seanseService.Value;
    public IPromocodeService PromocodeService => _promocodeService.Value;
}
