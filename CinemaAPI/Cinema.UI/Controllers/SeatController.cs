using Cinema.Domain.Models.DTOs;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("api/seats")]
[ApiController]
public class SeatController : ControllerBase
{
    private readonly IServiceManager _service;

    public SeatController(IServiceManager service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllSeats()
    {
        var seats = await _service.SeatService.GetAllAsync();

        return Ok(seats);
    }

    [HttpGet("{id:int}", Name = "SeatById")]
    public async Task<IActionResult> GetSeatByIdAsync(int id)
    {
        var seat = await _service.SeatService.GetAsync(id);

        return Ok(seat);
    }

    [HttpPost]
    public async Task<IActionResult> AddSeatAsync([FromBody] AddSeatWithHallIdRequest addSeatRequest)
    {
        var createdSeat = await _service.SeatService.AddAsync(addSeatRequest);

        return CreatedAtRoute("SeatById", new { id = createdSeat.Id }, createdSeat);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateSeatAsync(int id, [FromBody] UpdateSeatWithHallIdRequest updateSeatRequest)
    {
        await _service.SeatService.UpdateAsync(id, updateSeatRequest);

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteSeatAsync(int id)
    {
        await _service.SeatService.DeleteAsync(id);

        return NoContent();
    }
}
