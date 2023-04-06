using Cinema.Domain.Models.DTOs;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("api/promocodes")]
[ApiController]
public class PromocodeController : ControllerBase
{
    private readonly IServiceManager _service;

	public PromocodeController(IServiceManager service)
	{
		_service = service;
	}

    [HttpGet]
    public async Task<IActionResult> GetAllPromocodes()
    {
        var promocodes = await _service.PromocodeService.GetAllAsync();
        
        return Ok(promocodes);
    }

    [HttpGet("{id:int}", Name = "PromocodeById")]
    public async Task<IActionResult> GetPromocodeByIdAsync(int id)
    {
        var promocode = await _service.PromocodeService.GetAsync(id);
       
        return Ok(promocode);
    }

    [HttpPost]
    public async Task<IActionResult> AddPromocodeAsync([FromBody] AddPromocodeRequest addPromocodeRequest)
    {
        var createdPromocode = await _service.PromocodeService.AddAsync(addPromocodeRequest);

        return CreatedAtRoute("PromocodeById", new { id = createdPromocode.Id }, createdPromocode);        
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdatePromocodeAsync(int id, [FromBody] UpdatePromocodeRequest updatePromocodeRequest)
    {
        await _service.PromocodeService.UpdateAsync(id, updatePromocodeRequest);

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeletePromocodeAsync(int id)
    {
        await _service.PromocodeService.DeleteAsync(id);
        
        return NoContent();
    }
}
