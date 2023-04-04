using Cinema.Domain.Models.DTOs;
using Cinema.Domain.Models.ViewModels;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("api/prices")]
[ApiController]
public class PriceController : ControllerBase
{
    private readonly IServiceManager _service;

    public PriceController(IServiceManager service)
    {
        _service = service;
    }

    [HttpGet]   
    public async Task<IActionResult> GetAllPrices()
    {
        var prices = await _service.PriceService.GetAllAsync();

        return Ok(prices);
    }

    [HttpGet("{id:int}", Name = "PriceById")]
    public async Task<IActionResult> GetPriceByIdAsync(int id)
    {
        var price = await _service.PriceService.GetAsync(id);

        return Ok(price);
    }

    [HttpPost]
    public async Task<IActionResult> AddPriceAsync([FromBody] AddPriceRequest addPriceRequest)
    {
        var createdPrice = await _service.PriceService.AddAsync(addPriceRequest);

        return CreatedAtRoute("PriceById", new { id = createdPrice.Id }, createdPrice);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdatePriceAsync(int id, [FromBody] UpdatePriceRequest updatePriceRequest)
    {
        await _service.PriceService.UpdateAsync(id, updatePriceRequest);

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeletePriceAsync(int id)
    {
        await _service.PriceService.DeleteAsync(id);

        return NoContent();
    }
}
