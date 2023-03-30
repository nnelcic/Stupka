using AutoMapper;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class ServiceManager : IServiceManager
{
    private readonly Lazy<ICinemaService> _cinemaManager;

    public ServiceManager(IRepositoryManager repositoryManager, ILoggerManager logger, IMapper autoMapper)
    {
        _cinemaManager = new Lazy<ICinemaService>(() => new CinemaService(repositoryManager, autoMapper, logger));
    }

    public ICinemaService CinemaService => _cinemaManager.Value;
}
