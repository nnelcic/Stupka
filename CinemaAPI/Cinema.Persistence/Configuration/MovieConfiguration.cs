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
    }
}
