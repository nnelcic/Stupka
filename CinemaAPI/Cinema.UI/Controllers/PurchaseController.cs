using Cinema.Domain.Models.DTOs;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("api/purchase")]
[ApiController]
public class PurchaseController : ControllerBase
{
    private readonly IServiceManager _service;

    public PurchaseController(IServiceManager service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllPurchases()
    {
        var purchases = await _service.PurchaseService.GetAllAsync();

        return Ok(purchases);
    }

    [HttpGet("{id:int}", Name = "PurchaseById")]
    public async Task<IActionResult> GetPurchaseByIdAsync(int id)
    {
        var purchase = await _service.PurchaseService.GetAsync(id);

        return Ok(purchase);
    }

    [HttpPost]
    public async Task<IActionResult> AddCinemaAsync([FromBody] AddPurchaseRequest addPurchaseRequest)
    {
        var createdPurchase = await _service.PurchaseService.AddAsync(addPurchaseRequest);

        return CreatedAtRoute("PurchaseById", new { id = createdPurchase.Id }, createdPurchase);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeletePurchaseAsync(int id)
    {
        await _service.PurchaseService.DeleteAsync(id);

        return NoContent();
    }
}
