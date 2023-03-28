using Cinema.Domain.Models.DTOs;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("[controller]")]
[ApiController]
public class CinemaController : Controller
{
    private readonly ICinemaService _cinemaService;

    public CinemaController(ICinemaService cinemaService)
    {
        _cinemaService = cinemaService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCinemasAsync()
    {
        var cinemas = await _cinemaService.GetAllAsync();
        return Ok(cinemas);
    }

    [HttpGet]
    [Route("{id:int}")]
    public async Task<IActionResult> GetCinemaByIdAsync(int id)
    {
        if (id <= 0) return BadRequest();
        
        var cinema = await _cinemaService.GetAsync(id);

        if (cinema is null) return NotFound();

        return Ok(cinema);
    }

    [HttpPost]
    public async Task<IActionResult> AddCinemaAsync(AddCinemaRequest addCinemaRequest)
    {
        if (addCinemaRequest is null) return BadRequest();
        
        var cinema = await _cinemaService.AddAsync(addCinemaRequest);

        if (cinema is null) return NotFound();

        return Ok(cinema);
    }

    [HttpPut]
    [Route("{id:int}")]
    public async Task<IActionResult> UpdateCinemaAsync(int id, UpdateCinemaRequest updateCinemaRequest)
    {
        if (updateCinemaRequest is null || id <= 0) return BadRequest();

        var cinema = await _cinemaService.UpdateAsync(id, updateCinemaRequest);

        if (cinema is null) return NotFound();

        return Ok(cinema);
    }

    [HttpDelete]
    [Route("{id:int}")]
    public async Task<IActionResult> DeleteCinemaAsync(int id)
    {
        if (id <= 0) return BadRequest();

        var cinema = await _cinemaService.DeleteAsync(id);

        if (cinema is null) return NotFound();

        return Ok(cinema);
    }
}