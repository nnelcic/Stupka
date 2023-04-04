﻿namespace Cinema.Service.Interfaces;

public interface IServiceManager
{
    ICinemaService CinemaService { get; }
    IMovieService MovieService { get; }
    IPriceService PriceService { get; }
    IHallService HallService { get; }
    ISeatService SeatService { get; }
    IUserService UserService { get; }
    ISeanseService SeanseService { get; }
    IPromocodeService PromocodeService { get; }   
}
