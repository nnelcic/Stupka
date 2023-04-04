using AutoMapper;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.UI.Profiles;

public class MovieProfile : Profile
{
	public MovieProfile()
	{
        CreateMap<Movie, MovieViewModel>()
            .ReverseMap();
        CreateMap<Movie, AddMovieRequest>()
            .ReverseMap();
        CreateMap<Movie, UpdateMovieRequest>()
            .ReverseMap();
        CreateMap<Movie, MovieDetailsViewModel>()
            .ReverseMap();
        CreateMap<MovieDetailsViewModel, MovieDetails>()
            .ReverseMap();
    }
}
