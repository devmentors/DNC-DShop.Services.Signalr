using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using DShop.Common.Authentication;
using DShop.Services.Signalr.Framework;

namespace DShop.Services.Signalr.Hubs
{
    public class DShopHub : Hub
    {
        private readonly IJwtHandler _jwtHandler;

        public DShopHub(IJwtHandler jwtHandler)
        {
            _jwtHandler = jwtHandler;
        }

        public async Task InitializeAsync(string token)
        {
            if (string.IsNullOrWhiteSpace(token))
            {
                await DisconnectAsync();
            }
            try
            {
                var payload = _jwtHandler.GetTokenPayload(token);
                if (payload == null)
                {
                    await DisconnectAsync();
                    
                    return;
                }
                var group = Guid.Parse(payload.Subject).ToUserGroup();
                await Groups.AddToGroupAsync(Context.ConnectionId, group);
                await ConnectAsync();
            }
            catch
            {
                await DisconnectAsync();
            }
        }

        private async Task ConnectAsync()
        {
            await Clients.Client(Context.ConnectionId).SendAsync("connected");
        }

        private async Task DisconnectAsync()
        {
            await Clients.Client(Context.ConnectionId).SendAsync("disconnected");
        }
    }
}