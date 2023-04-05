using Cinema.Domain.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class MovieDetailsConfiguration : IEntityTypeConfiguration<MovieDetails>
{
    public void Configure(EntityTypeBuilder<MovieDetails> builder)
    {
        builder
            .HasKey(x => x.Id);

        builder
            .Property(x => x.Description)
            .HasMaxLength(400);

        builder
            .Property(x => x.Producers)
            .HasMaxLength(50);

        builder
            .Property(x => x.AgeLimit);

        builder
            .Property(x => x.IndependentRate);

        builder
            .Property(x => x.Country)
            .HasMaxLength(50);

        builder
            .Property(x => x.MovieTrailerUrl)
            .HasMaxLength(50);

        builder
            .Property(x => x.StartDate);

        builder
            .Property(x => x.EndDate);

        builder
            .HasData
            (
                new MovieDetails
                {
                    Id = 1,
                    Description = @"Мирний зелений чолов'яга, намагається релаксувати в своєму болоті, але спочатку йому заважає цирк, а потім новий надокучливий друг віслюк",
                    Producers = "Mr Producer",
                    AgeLimit = 5,
                    IndependentRate = 9.7,
                    Country = "USA",
                    MovieTrailerUrl = "www.shrekMovieTrailerUrl.com",
                    StartDate = DateTime.Parse("2000-05-03"),
                    EndDate = DateTime.Parse("2000-05-03"),
                    MovieId = 1
                },
                new MovieDetails
                {
                    Id = 2,
                    Description = @"Чувачок потрапив на корабель, корабель затонув чувачку сподобалась дівчина, там ще була та сцена на кораблі, і потім він затонув ніби.",
                    Producers = "Mr Producer",
                    AgeLimit = 16,
                    IndependentRate = 9.1,
                    Country = "USA",
                    MovieTrailerUrl = "www.TitanicMovieTrailerUrl.com",
                    StartDate = DateTime.Parse("1995-06-06"),
                    EndDate = DateTime.Parse("2020-09-09"),
                    MovieId = 2
                }
            );
    }
}
