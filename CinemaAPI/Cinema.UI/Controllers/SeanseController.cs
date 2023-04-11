using Cinema.Domain.Models.DTOs;
using Cinema.Domain.RequestFeatures;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Cinema.UI.Controllers;

[Route("api/seanses")]
[ApiController]
public class SeanseController : ControllerBase
{
    private readonly IServiceManager _service;

    public SeanseController(IServiceManager service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllSeanses([FromQuery] SeanseParameters seanseParameters)
    {
        var pagedResult = await _service.SeanseService.GetAllAsync(seanseParameters);

        Response.Headers.Add("X-Pagination", JsonSerializer.Serialize(pagedResult.metaData));

        return Ok(pagedResult.seanses);
    }

    [HttpGet("{id:int}", Name = "SeanseById")]
    public async Task<IActionResult> GetSeanseByIdAsync(int id)
    {
        var seanse = await _service.SeanseService.GetAsync(id);

        return Ok(seanse);
    }

    [HttpPost]
    public async Task<IActionResult> AddSeanseAsync([FromBody] AddSeanseRequest addSeanseRequest)
    {
        var createdSeanse = await _service.SeanseService.AddAsync(addSeanseRequest);

        return CreatedAtRoute("SeanseById", new { id = createdSeanse.Id }, createdSeanse);

    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateSeanseAsync(int id, [FromBody] UpdateSeanseRequest updateSeanseRequest)
    {
        await _service.SeanseService.UpdateAsync(id, updateSeanseRequest);

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteSeanseAsync(int id)
    {
        await _service.SeanseService.DeleteAsync(id);

        return NoContent();
    }
}
