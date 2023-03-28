﻿using Cinema.Domain.Models.DTOs;
using FluentValidation;

namespace Cinema.UI.Validators;

public class AddCinemaRequestValidator : AbstractValidator<AddCinemaRequest>
{
    public AddCinemaRequestValidator()
    {
        RuleFor(x => x.Name)
            .NotNull()
                .WithMessage("Name couldn't be null!")
            .NotEmpty()
                .WithMessage("Name couldn't be empty!");
        RuleFor(x => x.Address)
            .NotNull()
                .WithMessage("Address couldn't be null!")
            .NotEmpty()
                .WithMessage("Address couldn't be empty!");
        RuleFor(x => x.City)
            .NotNull()
                .WithMessage("City couldn't be null!")
            .NotEmpty()
                .WithMessage("City couldn't be empty!");
        RuleFor(x => x.Email)
            .NotNull()
                .WithMessage("Email couldn't be null!")
            .NotEmpty()
                .WithMessage("Email couldn't be empty!")
            .EmailAddress()
                .WithMessage("Not valid email!");
        RuleFor(x => x.PhoneNumber)
            .NotNull()
                .WithMessage("Phone number couldn't be null!")
            .NotEmpty()
                .WithMessage("Phone number couldn't be empty!");
    }
}