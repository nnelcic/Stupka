using AutoMapper;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.UI.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserViewModel>()
            .ReverseMap();
        CreateMap<User, AddUserRequest>()
            .ReverseMap();
        CreateMap<User, UpdateUserRequest>()
            .ReverseMap();
        CreateMap<User, UserInfoViewModel>()
            .ReverseMap();
        CreateMap<UserDetailsViewModel, UserDetails>()
            .ReverseMap();
    }
}