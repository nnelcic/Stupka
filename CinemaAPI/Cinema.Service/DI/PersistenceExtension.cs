using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Cinema.Persistence.Repositories;
using Cinema.Service.Interfaces;
using Cinema.Service.Services.Logger;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cinema.Service.DI;

public static class PersistenceExtension
{
    public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<CinemaDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("CinemaDb"));
        });

        services.AddScoped<ICinemaRepository, CinemaRepository>();
        
        
        services.AddSingleton<ILoggerManager, LoggerManager>();
        
        return services;
    }
}