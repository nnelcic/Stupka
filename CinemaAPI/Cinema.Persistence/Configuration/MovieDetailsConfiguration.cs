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
            .HasMaxLength(200);

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
    }
}
