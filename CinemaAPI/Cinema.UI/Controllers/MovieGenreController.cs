using Cinema.Domain.Models.DTOs;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("api/movieGenre")]
[ApiController]
public class MovieGenreController : ControllerBase
{
    private readonly IServiceManager _service;

    public MovieGenreController(IServiceManager service)
    {
        _service = service;
    }

    [HttpGet("{id:int}", Name = "MovieGenresByMovieId")]
    public async Task<IActionResult> GetMovieGenresByMovieIdAsync(int id)
    {
        var movieGenres = await _service.MovieGenreService.GetAsync(id);
       
        return Ok(movieGenres);
    }

    [HttpPost]
    public async Task<IActionResult> AddMovieGenreAsync([FromBody] AddMovieGenreRequest addMovieGenreRequest)
    {
        var createdMovieGenres = await _service.MovieGenreService.AddAsync(addMovieGenreRequest);
        
        return CreatedAtRoute("MovieGenresByMovieId", new { id = createdMovieGenres.MovieId }, createdMovieGenres);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateMoviegenreAsync(int id, [FromBody] UpdateMovieGenreRequest updateMovieGenreRequest)
    {
        await _service.MovieGenreService.UpdateAsync(id, updateMovieGenreRequest);

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteMovieGenreAsync(int id)
    {
        await _service.MovieGenreService.DeleteAsync(id);

        return NoContent();
    }
}
