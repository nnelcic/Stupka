﻿namespace Cinema.Persistence.Interfaces;

public interface IRepositoryManager
{
    ICinemaRepository Cinema { get; }
    IMovieRepository Movie { get; }
    IPriceRepository Price { get; }
    IHallRepository Hall { get; }
    ISeatRepository Seat { get; }
    IUserRepository User { get; }
    ISeanseRepository Seanse { get; }
    IPromocodeRepository Promocode { get; }
    IUserRefreshTokenRepository RefreshToken { get; }
    IPurchaseRepository Purchase { get; } 
    IMovieGenreRepository MovieGenre { get; }
 
    Task SaveAsync();
}
