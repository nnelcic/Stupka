using Cinema.Service.DI;
using Cinema.Service.Interfaces;
using Cinema.Service.Services;
using Cinema.UI.Extensions;
using FluentValidation.AspNetCore;
using NLog;

namespace Cinema.UI;
public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Logger
        LogManager.LoadConfiguration(string.Concat(Directory.GetCurrentDirectory(), "/nlog.config"));

        builder.Services.AddControllers();
        
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // DI
        builder.Services.AddPersistence(builder.Configuration);

        builder.Services.AddScoped<IServiceManager, ServiceManager>();
        builder.Services.AddScoped<ICinemaService, CinemaService>();
        builder.Services.AddScoped<IUserService, UserService>();

        // Add AutoMapper
        builder.Services.AddAutoMapper(typeof(Program).Assembly);

        // Add FluentValidation
        builder.Services.AddFluentValidation(options =>
        {
            options.RegisterValidatorsFromAssemblyContaining<Program>();
        });

        var app = builder.Build();

        var logger = app.Services.GetRequiredService<ILoggerManager>();
        app.ConfigureExceptionHandler(logger);

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}