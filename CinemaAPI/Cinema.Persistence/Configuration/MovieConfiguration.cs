using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class MovieConfiguration : IEntityTypeConfiguration<Movie>
{
    public void Configure(EntityTypeBuilder<Movie> builder)
    {
        builder
            .HasKey(x => x.Id);

        builder
            .Property(x => x.OriginalTitle)
            .HasMaxLength(100);

        builder
            .Property(x => x.Title)
            .HasMaxLength(100);

        builder
            .Property(x => x.Duration);

        builder
            .Property(x => x.ReleaseDate);

        builder
            .Property(x => x.PosterUrl)
            .HasMaxLength(60);

        builder
            .HasData
            (
                new Movie 
                { 
                    Id = 1, 
                    OriginalTitle = "Shrek", 
                    Title = "Зелений чолов'яга",
                    Duration = 145,
                    ReleaseDate = DateTime.Parse("1999-04-01"),
                    PosterUrl = "www.niceShrekUrl.com",
                    MovieTypeId = 2,
                },
                new Movie
                {
                    Id = 2,
                    OriginalTitle = "Titanic",
                    Title = "Затонувший корабель",
                    Duration = 120,
                    ReleaseDate = DateTime.Parse("1995-01-01"),
                    PosterUrl = "www.niceTitanicUrl.com",
                    MovieTypeId = 3,
                }
            );
    }
}
