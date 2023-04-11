using Cinema.Domain.Models.DTOs;
using FluentValidation;
using System.Text.RegularExpressions;

namespace Cinema.UI.Validators;

public class UpdateUserRequestValidator : AbstractValidator<UpdateUserRequest>
{
    public UpdateUserRequestValidator()
    {
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
                .WithMessage("50 character limit exceeded!")
            .Must(IsValidPhoneNumber)
                .WithMessage("Phonenumber isn't valid!");

        RuleFor(x => x.RoleId)
            .NotNull()
                .WithMessage("RoleId could not be null!")
            .NotEmpty()
                .WithMessage("RoleId could not be empty!")
            .GreaterThan(0)
                .WithMessage("RoleId must be greater than 0")
            .LessThan(3)
                .WithMessage("RoleId must be less than 3");
    }
    private bool IsValidPhoneNumber(string phoneNumber)
    {
        return Regex.IsMatch(phoneNumber, "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$");
    }
}