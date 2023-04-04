using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class UserService : IUserService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public UserService(IRepositoryManager repository, ILoggerManager loggerManager, IMapper mapper)
    {
        _repository = repository;
        _loggerManager = loggerManager;
        _mapper = mapper;
    }

    public async Task<IEnumerable<UserViewModel>> GetAllAsync()
    {
        var users = await _repository.User.GetAllUsersAsync();

        return _mapper.Map<List<UserViewModel>>(users);
    }

    public async Task<UserViewModel> GetAsync(int id)
    {
        var user = await _repository.User.GetUserAsync(id);

        if (user is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(User), id));
        }

        return _mapper.Map<UserViewModel>(user);
    }

    public async Task<UserViewModel> AddAsync(AddUserRequest addUserRequest)
    {
        var user = _mapper.Map<User>(addUserRequest);
        user.UserDetails = new UserDetails();

        _repository.User.CreateUser(user);
        await _repository.SaveAsync();

        user = await _repository.User.GetUserAsync(user.Id);
        var userToReturn = _mapper.Map<UserViewModel>(user);

        return userToReturn;
    }

    public async Task UpdateAsync(int id, UpdateUserRequest updateUserRequest)
    {
        var user = await _repository.User.GetUserAsync(id, true);
        
        if (user is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(User), id));
        }

        _mapper.Map(updateUserRequest, user);
        await _repository.SaveAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var user = await _repository.User.GetUserAsync(id);

        if (user is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(User), id));
        }
        
        _repository.User.DeleteUser(user);
        await _repository.SaveAsync();
    }

    public async Task<UserInfoViewModel> GetInfoAsync(int id)
    {
        var user = await _repository.User.GetUserInfoAsync(id);

        if (user is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(User), id));
        }

        return _mapper.Map<UserInfoViewModel>(user);
    }
}