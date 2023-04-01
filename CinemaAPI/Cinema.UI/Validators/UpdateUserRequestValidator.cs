using Cinema.Domain.Models.DTOs;
using FluentValidation;

namespace Cinema.UI.Validators;

public class UpdateUserRequestValidator : AbstractValidator<UpdateUserRequest>
{
    public UpdateUserRequestValidator()
    {
        RuleFor(x => x.Email)
            .NotNull()
                .WithMessage("Email could not be null!")
            .NotEmpty()
                .WithMessage("Email could not be empty!")
            .EmailAddress()
                .WithMessage("Email is invalid!")
            .MaximumLength(50)
                .WithMessage("50 character limit exceeded!");
        RuleFor(x => x.Password)
            .NotNull()
                .WithMessage("Password could not be null!")
            .NotEmpty()
                .WithMessage("Password could not be empty!")
            .MaximumLength(50)
                .WithMessage("50 character limit exceeded!");
        RuleFor(x => x.FirstName)
            .NotNull()
                .WithMessage("FirstName could not be null!")
            .NotEmpty()
                .WithMessage("FirstName could not be empty!")
            .MaximumLength(50)
                .WithMessage("50 character limit exceeded!");
        RuleFor(x => x.LastName)
            .NotNull()
                .WithMessage("LastName could not be null!")
            .NotEmpty()
                .WithMessage("LastName could not be empty!")
            .MaximumLength(50)
                .WithMessage("50 character limit exceeded!");
        RuleFor(x => x.Birthday)
            .NotNull()
                .WithMessage("LastName could not be null!")
            .NotEmpty()
                .WithMessage("LastName could not be empty!")
            .Must(x => !x.Equals(default(DateTime)))
                .WithMessage("Invalid Date!");
        RuleFor(x => x.PhoneNumber)
            .NotNull()
                .WithMessage("PhoneNumber could not be null!")
            .NotEmpty()
                .WithMessage("PhoneNumber could not be empty!")
            .MaximumLength(50)
                .WithMessage("50 character limit exceeded!");
        RuleFor(x => x.RoleId)
            .NotNull()
                .WithMessage("RoleId could not be null!")
            .NotEmpty()
                .WithMessage("RoleId could not be empty!");
    }
}