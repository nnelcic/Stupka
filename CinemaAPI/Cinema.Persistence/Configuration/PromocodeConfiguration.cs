using Cinema.Domain.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class PromocodeConfiguration : IEntityTypeConfiguration<Domain.Models.Entities.Promocode>
{
    public void Configure(EntityTypeBuilder<Promocode> builder)
    {
        builder
            .HasKey(x => x.Id);

        builder
            .Property(x => x.Name)
            .HasMaxLength(50);

        builder
            .Property(x => x.Percentage);
    }
}
