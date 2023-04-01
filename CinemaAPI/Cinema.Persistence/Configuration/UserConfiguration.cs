using System.Reflection.Emit;
using Cinema.Domain.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cinema.Persistence.Configuration;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder
            .HasKey(x => x.Id);

        builder
            .Property(x => x.Email)
            .HasMaxLength(50);

        builder
            .Property(x => x.Password)
            .HasMaxLength(50);

        builder
            .Property(x => x.FirstName)
            .HasMaxLength(50);

        builder
            .Property(x => x.LastName)
            .HasMaxLength(50);

        builder
            .Property(x => x.Birthday);
        
        builder
            .Property(x => x.PhoneNumber)
            .HasMaxLength(20);
    }
}