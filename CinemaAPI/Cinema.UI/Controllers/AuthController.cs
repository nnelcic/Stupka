using Cinema.Domain.Models.DTOs;
using Cinema.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.UI.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly ITokenHandler _tokenHandler;
    private readonly IAuthenticatorService _authenticator;
    private readonly IServiceManager _manager;

    public AuthController(ITokenHandler tokenHandler, IAuthenticatorService authenticator, IServiceManager manager)
    {
        _tokenHandler = tokenHandler;
        _authenticator = authenticator;
        _manager = manager;
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Index(LoginRequest loginRequest)
    {
        var user = await _authenticator.AuthenticateAsync(loginRequest);
        var token = await _tokenHandler.CreateTokenAsync(user);
        return Ok(token);
    }
}