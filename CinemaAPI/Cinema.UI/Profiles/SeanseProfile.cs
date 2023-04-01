using AutoMapper;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.UI.Profiles;

public class SeanseProfile : Profile
{
    public SeanseProfile()
    {
        CreateMap<Domain.Models.Entities.Seanse, SeanseViewModel>()
            .ReverseMap();
        CreateMap<Domain.Models.Entities.Seanse, AddSeanseRequest>()
            .ReverseMap();
        CreateMap<Domain.Models.Entities.Seanse, UpdateSeanseRequest>()
            .ReverseMap();
    }
}
