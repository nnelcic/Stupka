using AutoMapper;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.UI.Profiles;

public class CinemaProfile : Profile
{
    public CinemaProfile()
    {
        CreateMap<Domain.Models.Entities.Cinema, CinemaViewModel>()
            .ReverseMap();
        CreateMap<Domain.Models.Entities.Cinema, AddCinemaRequest>()
            .ReverseMap();
        CreateMap<Domain.Models.Entities.Cinema, UpdateCinemaRequest>()
            .ReverseMap();
    }
}