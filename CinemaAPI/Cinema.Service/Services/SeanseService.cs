using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;


namespace Cinema.Service.Services;

public class SeanseService : ISeanseService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public SeanseService(IRepositoryManager repository, ILoggerManager loggerManager, IMapper mapper)
    {
        _repository = repository;        
        _loggerManager = loggerManager;
        _mapper = mapper;
    }
    public async Task<SeanseViewModel> AddAsync(AddSeanseRequest addSeanseRequest)
    {
        var seanse = _mapper.Map<Seanse>(addSeanseRequest);

        _repository.Seanse.CreateSeanse(seanse);

        await _repository.SaveAsync();

        var seanseToReturn = _mapper.Map<SeanseViewModel>(seanse);

        return seanseToReturn;
    }

    public async Task DeleteAsync(int id)
    {
        var seanse = await _repository.Seanse.GetSeanseAsync(id);

        if (seanse is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Seanse), id));
        }

        _repository.Seanse.DeleteSeanse(seanse);
        await _repository.SaveAsync();
    }

    public async Task<IEnumerable<SeanseViewModel>> GetAllAsync()
    {
        var seanses = await _repository.Seanse.GetAllSeanseAsync();

        return _mapper.Map<List<SeanseViewModel>>(seanses);
    }

    public async Task<SeanseInfoViewModel> GetAsync(int id)
    {
        var seanse = await _repository.Seanse.GetSeanseAsync(id);

        if (seanse == null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Seanse), id));
        }

        return _mapper.Map<SeanseInfoViewModel>(seanse);
    }

    public async Task UpdateAsync(int id, UpdateSeanseRequest updateSeanseRequest)
    {
        var seanseEntity = await _repository.Seanse.GetSeanseAsync(id, true);
        if (seanseEntity == null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Seanse), id));
        }
        _mapper.Map(updateSeanseRequest, seanseEntity);
        await _repository.SaveAsync();
    }
}
