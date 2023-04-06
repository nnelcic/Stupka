using Cinema.Domain.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class TicketConfiguration : IEntityTypeConfiguration<Ticket>
{
    public void Configure(EntityTypeBuilder<Ticket> builder)
    {
        builder
            .HasOne(x => x.Seat)
            .WithMany()
            .OnDelete(DeleteBehavior.NoAction);

        builder
            .Property(x => x.Price)
            .HasPrecision(7, 2);
    }
}
