using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Data;

public class CinemaDbContext : DbContext
{
    public CinemaDbContext(DbContextOptions<CinemaDbContext> options) : base(options) { }

    public DbSet<Domain.Models.Entities.Cinema> Cinemas { get; set; }
}