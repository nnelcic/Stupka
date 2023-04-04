using AutoMapper;
using Cinema.Domain.ExceptionModels;
using Cinema.Domain.Models.Consts;
using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.Entities;
using Cinema.Domain.Models.ViewModels;
using Cinema.Persistence.Interfaces;
using Cinema.Service.Interfaces;

namespace Cinema.Service.Services;

public class MovieService : IMovieService
{
    private readonly IRepositoryManager _repository;
    private readonly ILoggerManager _loggerManager;
    private readonly IMapper _mapper;

    public MovieService(IRepositoryManager repository, ILoggerManager loggerManager, IMapper mapper)
    {
        _repository = repository;
        _loggerManager = loggerManager;
        _mapper = mapper;
    }
    public async Task<IEnumerable<MovieViewModel>> GetAllAsync()
    {
        var movies = await _repository.Movie.GetAllMoviesInfoAsync();
        return _mapper.Map<List<MovieViewModel>>(movies);
    }

    public async Task<MovieDetailsViewModel> GetInfoAsync(int id)
    {
        var movie = await _repository.Movie.GetMovieInfoAsync(id);

        if (movie == null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Movie), id));
        }

        return _mapper.Map<MovieDetailsViewModel>(movie);
    
    }

    public async Task<MovieViewModel> GetAsync(int id)
    {
        var movie = await _repository.Movie.GetMovieAsync(id);

        if (movie is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Movie), id));
        }

        return _mapper.Map<MovieViewModel>(movie);        
    }

    public async Task<MovieViewModel> AddAsync(AddMovieRequest addMovieRequest)
    {
        var movie = _mapper.Map<Movie>(addMovieRequest);
        movie.MovieDetails = new MovieDetails();        

        _repository.Movie.CreateMovie(movie);
        await _repository.SaveAsync();

        movie = await _repository.Movie.GetMovieAsync(movie.Id);
       
        var movieToReturn = _mapper.Map<MovieViewModel>(movie);

        return movieToReturn;        
    }

    public async Task UpdateAsync(int id, UpdateMovieRequest updateMovieRequest)
    {
        var movie = await _repository.Movie.GetMovieAsync(id, true);
        
        if (movie is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Movie), id));
        }

        _mapper.Map(updateMovieRequest, movie);
        
        await _repository.SaveAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var movie = await _repository.Movie.GetMovieAsync(id);
        
        if (movie is null)
        {
            _loggerManager.LogError(ConstError.ERROR_BY_ID);
            throw new NotFoundException(ConstError.GetErrorForException(nameof(Movie), id));
        }

        _repository.Movie.DeleteMovie(movie);
       
        await _repository.SaveAsync();
    }
    
}
