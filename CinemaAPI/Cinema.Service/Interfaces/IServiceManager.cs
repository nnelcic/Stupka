namespace Cinema.Service.Interfaces;

public interface IServiceManager
{
    ICinemaService CinemaService { get; }
    ISeanseService SeanseService { get; }
}
