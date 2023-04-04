using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class PhaseConfiguration : IEntityTypeConfiguration<Phase>
{
    public void Configure(EntityTypeBuilder<Phase> builder)
    {
        builder
            .HasKey(t => t.Id);

        builder
            .HasData
            (
                new Phase { PhaseName = PhaseEnum.Expected, Id = 1},
                new Phase { PhaseName = PhaseEnum.InRental, Id = 2},
                new Phase { PhaseName = PhaseEnum.Unavailable, Id = 3}            
            );
    }
}
