using Cinema.Domain.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class GerneConfiguration : IEntityTypeConfiguration<Genre>
{
    public void Configure(EntityTypeBuilder<Genre> builder)
    {
        builder
            .HasKey(x => x.Id);

        builder
            .Property(x => x.Name)
            .HasMaxLength(50);
    }
}
