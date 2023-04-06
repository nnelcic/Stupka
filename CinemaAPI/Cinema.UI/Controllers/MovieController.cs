using Cinema.Domain.Models.DTOs;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("api/movies")]
[ApiController]
public class MovieController : ControllerBase
{
    private readonly IServiceManager _service;

    public MovieController(IServiceManager service)
    {
        _service = service;
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> GetAllMoviesAsync()
    {
        var movies = await _service.MovieService.GetAllAsync();
        
        return Ok(movies);        
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> GetAllMoviesInfoAsync()
    {
        var movies = await _service.MovieService.GetAllInfoAsync();

        return Ok(movies);
    }

    [HttpGet("[action]/{id:int}")]
    public async Task<IActionResult> GetMovieInfoAsync(int id)
    {
        var movie = await _service.MovieService.GetInfoAsync(id);
       
        return Ok(movie);
    }

    [HttpGet("[action]/{id:int}")]
    [ActionName("GetMoviesByIdAsync")]
    public async Task<IActionResult> GetMoviesByIdAsync(int id)
    {
        var movie = await _service.MovieService.GetAsync(id);
        
        return Ok(movie);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> AddMovieAsync([FromBody] AddMovieRequest addMovieRequest)
    {
        var createdMovie = await _service.MovieService.AddAsync(addMovieRequest);

        return CreatedAtAction(nameof(GetMoviesByIdAsync), new { id = createdMovie.Id }, createdMovie);        
    }

    [HttpPut("[action]/{id:int}")]
    public async Task<IActionResult> UpdateMovieAsync(int id, [FromBody] UpdateMovieRequest updateMovieRequest)
    {
        await _service.MovieService.UpdateAsync(id, updateMovieRequest);        

        return NoContent();
    }

    [HttpDelete("[action]/{id:int}")]
    public async Task<IActionResult> DeleteMovieAsync(int id)
    {
        await _service.MovieService.DeleteAsync(id);
        
        return NoContent();
    }
}
