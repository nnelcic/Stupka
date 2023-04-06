using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;


namespace Cinema.Service.Services;

public class PromocodeService : IPromocodeService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public PromocodeService(IRepositoryManager repository, ILoggerManager loggerManager, IMapper mapper)
    {
        _repository = repository;        
        _loggerManager = loggerManager;
        _mapper = mapper;
    }
    
    public async Task<PromocodeViewModel> AddAsync(AddPromocodeRequest addPromocodeRequest)
    {
        var promocode = _mapper.Map<Domain.Models.Entities.Promocode>(addPromocodeRequest);

        _repository.Promocode.CreatePromocode(promocode);
       
        await _repository.SaveAsync();

        var promocodeToReturn = _mapper.Map<PromocodeViewModel>(promocode);       

        return promocodeToReturn;
    }

    public async Task DeleteAsync(int id)
    {
        var promocode = await _repository.Promocode.GetPromocodeAsync(id);

       if (promocode is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Promocode), id));
        }

        _repository.Promocode.DeletePromocode(promocode);
        
        await _repository.SaveAsync();
    }

    public async Task<IEnumerable<PromocodeViewModel>> GetAllAsync()
    {
        var promocode = await _repository.Promocode.GetAllPromocodeAsync();

        return _mapper.Map<List<PromocodeViewModel>>(promocode);
    }

    public async Task<PromocodeViewModel> GetAsync(int id)
    {
        var promocode = await _repository.Promocode.GetPromocodeAsync(id);
        
        if (promocode is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Promocode), id));
        }

        return _mapper.Map<PromocodeViewModel>(promocode);
    }

    public async Task<PromocodeViewModel> GetAsync(string promocode)
    {
        var existingPromocode = await _repository.Promocode.GetPromocodeAsync(promocode);

        if (existingPromocode is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetInvalidPromocodeException(nameof(Promocode)));
        }

        return _mapper.Map<PromocodeViewModel>(existingPromocode);
    }

    public async Task UpdateAsync(int id, UpdatePromocodeRequest updatePromocodeRequest)
    {
        var promocodeEntity = await _repository.Promocode.GetPromocodeAsync(id, true);
        
        if (promocodeEntity is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Domain.Models.Entities.Promocode), id));
        }

        _mapper.Map(updatePromocodeRequest, promocodeEntity);
      
        await _repository.SaveAsync();
    }
}
