using Microsoft.AspNetCore.Mvc;

namespace DShop.Services.Signalr.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Get() => Ok("DShop SignalR Service");
    }
}