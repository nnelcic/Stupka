using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class MovieGenreService : IMovieGenreService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public MovieGenreService(IRepositoryManager repository, ILoggerManager loggerManager, IMapper mapper)
    {
        _repository = repository;
        _loggerManager = loggerManager;
        _mapper = mapper;
    }

    public async Task<MovieGenreViewModel> AddAsync(AddMovieGenreRequest addMovieGenreRequest)
    {
        var movieGenre = _mapper.Map<MovieGenre>(addMovieGenreRequest);

        _repository.MovieGenre.CreateMovieGenre(movieGenre);
        await _repository.SaveAsync();

        movieGenre = await _repository.MovieGenre.GetMovieGenreAsync(movieGenre.MovieId);

        var movieGenreToReturn = _mapper.Map<MovieGenreViewModel>(movieGenre);

        return movieGenreToReturn;
    }

    public async Task DeleteAsync(int id)
    {
        var moviegenre = await _repository.MovieGenre.GetMovieGenreAsync(id);
        
        if (moviegenre == null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(MovieGenre), id));
        }

        _repository.MovieGenre.DeleteMovieGenre(moviegenre);
       
        await _repository.SaveAsync();
    }

    public async Task<MovieGenreViewModel> GetAsync(int id)
    {
        var movieGenre = await _repository.MovieGenre.GetMovieGenreAsync(id);
        
        if (movieGenre is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(MovieGenre), id));
        }

        return _mapper.Map<MovieGenreViewModel>(movieGenre);
    }

    public async Task UpdateAsync(int id, UpdateMovieGenreRequest updateMovieGenreRequest)
    {
        var movieGenreEntity = await _repository.MovieGenre.GetMovieGenreAsync(id, true);
      
        if (movieGenreEntity is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(MovieGenre), id));
        }

        _mapper.Map(updateMovieGenreRequest, movieGenreEntity);
        await _repository.SaveAsync();
    }
}
