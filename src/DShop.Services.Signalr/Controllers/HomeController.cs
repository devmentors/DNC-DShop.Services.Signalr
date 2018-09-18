using Microsoft.AspNetCore.Mvc;

namespace DShop.Services.Signalr.Controllers
{
    [Route("")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok("DShop SignalR Service");
    }
}