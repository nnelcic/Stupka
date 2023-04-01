using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Configuration;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Persistence.Data;

public class RepositoryContext : DbContext
{
    public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options) 
    { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favourite>()
            .HasKey(f => new { f.MovieId, f.UserDetailsId });
        modelBuilder.Entity<Favourite>()
            .HasOne(f => f.Movie)
            .WithMany(m => m.Favourites)
            .HasForeignKey(f => f.MovieId);
        modelBuilder.Entity<Favourite>()
            .HasOne(f => f.UserDetails)
            .WithMany(ud => ud.Favourites)
            .HasForeignKey(f => f.UserDetailsId);
        
        modelBuilder.Entity<MovieGenre>()
            .HasKey(mg => new { mg.GenreId, mg.MovieId });
        modelBuilder.Entity<MovieGenre>()
            .HasOne(mg => mg.Movie)
            .WithMany(m => m.MovieGenres)
            .HasForeignKey(mg => mg.MovieId);
        modelBuilder.Entity<MovieGenre>()
            .HasOne(mg => mg.Genre)
            .WithMany(g => g.MovieGenres)
            .HasForeignKey(mg => mg.GenreId);

        modelBuilder.Entity<Price>()
            .Property(p => p.Cost)
            .HasColumnType("decimal(5,2)");

        modelBuilder.Entity<Ticket>()
            .HasOne(t => t.Seat)
            .WithMany()
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.ApplyConfiguration(new CinemaConfiguration());
        modelBuilder.ApplyConfiguration(new RoleConfiguration());
        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new SeanseConfiguration());
        modelBuilder.ApplyConfiguration(new PromocodeConfiguration());
    }

    public DbSet<Domain.Models.Entities.Cinema>? Cinemas { get; set; }
    public DbSet<Favourite>? Favourites { get; set; }
    public DbSet<Genre>? Genres { get; set; }
    public DbSet<Hall>? Halls { get; set; }
    public DbSet<Movie>? Movies { get; set; }
    public DbSet<MovieDetails>? MovieDetails { get; set; }
    public DbSet<MovieType>? MovieTypes { get; set; }
    public DbSet<Phase>? Phases { get; set; }
    public DbSet<Price>? Prices { get; set; }
    public DbSet<Promocode>? Promocodes { get; set; }
    public DbSet<Review>? Reviews { get; set; }
    public DbSet<Role>? Roles { get; set; }
    public DbSet<Seanse>? Seanses { get; set; }
    public DbSet<Seat>? Seats { get; set; }
    public DbSet<SeatType>? SeatTypes { get; set; }
    public DbSet<Ticket>? Tickets { get; set; }
    public DbSet<User>? Users { get; set; }
    public DbSet<UserDetails>? UserDetails { get; set; }
}