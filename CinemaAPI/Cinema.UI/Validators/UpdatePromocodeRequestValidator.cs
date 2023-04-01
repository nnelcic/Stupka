using Cinema.Domain.Models.DTOs;
using FluentValidation;

namespace Cinema.UI.Validators;

public class UpdatePromocodeRequestValidator : AbstractValidator<UpdatePromocodeRequest>
{
	public UpdatePromocodeRequestValidator()
	{
        RuleFor(x => x.Name)
            .NotNull()
                .WithMessage("Name couldn't be null!")
            .NotEmpty()
                .WithMessage("Name couldn't be empty!")
            .MaximumLength(50)
                .WithMessage("50 character limit exceeded!");
        RuleFor(x => x.Percentage)
            .NotNull()
                .WithMessage("Percentage couldn't be null!")
            .NotEmpty()
                .WithMessage("Percentage couldn't be empty!");
    }
}
