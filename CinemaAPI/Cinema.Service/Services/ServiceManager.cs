using AutoMapper;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class ServiceManager : IServiceManager
{
    private readonly Lazy<ICinemaService> _cinemaManager;
    private readonly Lazy<ISeanseService> _seanseManager;

    public ServiceManager(IRepositoryManager repositoryManager, ILoggerManager logger, IMapper autoMapper)
    {
        _cinemaManager = new Lazy<ICinemaService>(() => new CinemaService(repositoryManager, autoMapper, logger));
        _seanseManager = new Lazy<ISeanseService>(() => new SeanseService(repositoryManager, autoMapper, logger));
    }

    public ICinemaService CinemaService => _cinemaManager.Value;

    public ISeanseService SeanseService => _seanseManager.Value;
}
