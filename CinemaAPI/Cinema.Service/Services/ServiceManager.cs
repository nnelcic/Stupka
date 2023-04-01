using AutoMapper;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class ServiceManager : IServiceManager
{
    private readonly Lazy<ICinemaService> _cinemaService;
    private readonly Lazy<IUserService> _userService;
    private readonly Lazy<ISeanseService> _seanseManager;

    public ServiceManager(IRepositoryManager repositoryManager, ILoggerManager logger, IMapper autoMapper)
    {
        _cinemaService = new Lazy<ICinemaService>(() => new CinemaService(repositoryManager, logger, autoMapper));
        _userService = new Lazy<IUserService>(() => new UserService(repositoryManager, logger, autoMapper));
        _seanseManager = new Lazy<ISeanseService>(() => new SeanseService(repositoryManager, autoMapper, logger));
    }

    public ICinemaService CinemaService => _cinemaService.Value;
    public IUserService UserService => _userService.Value;
    public ISeanseService SeanseService => _seanseManager.Value;
}
