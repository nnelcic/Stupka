using AutoMapper;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;

namespace Cinema.UI.Profiles;

public class PromocodeProfile : Profile
{
	public PromocodeProfile()
	{
        CreateMap<Domain.Models.Entities.Promocode, PromocodeViewModel>()
            .ReverseMap();
        CreateMap<Domain.Models.Entities.Promocode, AddPromocodeRequest>()
            .ReverseMap();
        CreateMap<Domain.Models.Entities.Promocode, UpdatePromocodeRequest>()
            .ReverseMap();
    }
}
