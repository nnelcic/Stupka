using Cinema.Domain.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class SeatConfiguration : IEntityTypeConfiguration<Seat>
{
    public void Configure(EntityTypeBuilder<Seat> builder)
    {
        builder
            .HasKey(x => x.Id);

        builder
            .HasData
            (
                new Seat { Id = 1, HallId = 1, Row = 1, SeatNumber = 1, SeatTypeId = 1},
                new Seat { Id = 2, HallId = 1, Row = 1, SeatNumber = 2, SeatTypeId = 2},
                new Seat { Id = 3, HallId = 1, Row = 2, SeatNumber = 1, SeatTypeId = 3},
                new Seat { Id = 4, HallId = 1, Row = 2, SeatNumber = 2, SeatTypeId = 4}
            );
    }
}
