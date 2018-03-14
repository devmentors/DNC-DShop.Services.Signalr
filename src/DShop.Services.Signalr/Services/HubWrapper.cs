using System;
using System.Threading.Tasks;
using DShop.Services.Signalr.Framework;
using DShop.Services.Signalr.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace DShop.Services.Signalr.Services
{
    public class HubWrapper : IHubWrapper
    {
        private readonly IHubContext<DShopHub> _hubContext;

        public HubWrapper(IHubContext<DShopHub> hubContext)
        {
            _hubContext = hubContext;
        }

        public async Task PublishToUserAsync(Guid userId, string message, object data)
            => await _hubContext.Clients.Group(userId.ToUserGroup()).SendAsync(message, data);

        public async Task PublishToAllAsync(string message, object data)
            => await _hubContext.Clients.All.SendAsync(message, data);
    }
}