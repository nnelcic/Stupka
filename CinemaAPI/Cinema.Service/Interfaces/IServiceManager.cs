namespace Cinema.Service.Interfaces;

public interface IServiceManager
{
    ICinemaService CinemaService { get; }
    IUserService UserService { get; }
    ISeanseService SeanseService { get; }
    IPromocodeService PromocodeService { get; }
}
