using Cinema.Domain.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Cinema.Persistence.Configuration;

public class SeanseConfiguration : IEntityTypeConfiguration<Seanse>
{
    public void Configure(EntityTypeBuilder<Seanse> builder)
    {
        builder
            .HasKey(x => x.Id);

        builder
            .Property(x => x.StartTime);
    }
}
