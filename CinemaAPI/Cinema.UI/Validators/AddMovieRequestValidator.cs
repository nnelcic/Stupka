﻿using Cinema.Domain.Models.DTOs;
using FluentValidation;

namespace Cinema.UI.Validators;

public class AddMovieRequestValidator : AbstractValidator<AddMovieRequest>
{
	public AddMovieRequestValidator()
	{
		RuleFor(x => x.OriginalTitle)
            .NotNull()
                .WithMessage("Original Tittle could not be null!")
            .NotEmpty()
                .WithMessage("Original Tittle could not be empty!")
            .MaximumLength(100)
                .WithMessage("100 character limit exceeded!");
        RuleFor(x => x.Title)
            .NotEmpty()
                .WithMessage("Tittle could not be empty!")
            .NotNull()
                .WithMessage("Tittle could not be null!")
            .MaximumLength(100)
                .WithMessage("100 character limit exceeded!");
        RuleFor(x => x.Duration)
            .NotEmpty()
                .WithMessage("Duration could not be empty!")
            .NotNull()
                .WithMessage("Duration could not be null!");
        RuleFor(x => x.ReleaseDate)
            .NotEmpty()
                .WithMessage("Release date could not be empty!")
            .NotNull()
                .WithMessage("Release date could not be null!")
            .Must(x => !x.Equals(default(DateTime)))
                .WithMessage("Invalid Date!");
        RuleFor(x => x.PosterUrl)
            .NotEmpty()
                .WithMessage("Poster URL could not be empty!")
            .NotNull()
                .WithMessage("Poster URL could not be null!")
            .MaximumLength(60)
                .WithMessage("60 character limit exceeded!");
        RuleFor(x => x.MovieTypeId)
            .NotEmpty()
                .WithMessage("Movie type Id could not be empty!")
            .NotNull()
                .WithMessage("Movie type Id could not be null!");
    }
}
