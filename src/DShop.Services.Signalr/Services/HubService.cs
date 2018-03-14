using System;
using System.Threading.Tasks;
using DShop.Messages.Events.Operations;
using DShop.Services.Signalr.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace DShop.Services.Signalr.Services
{
    public class HubService : IHubService
    {
        private readonly IHubWrapper _hubContextWrapper;

        public HubService(IHubWrapper hubContextWrapper)
        {
            _hubContextWrapper = hubContextWrapper;
        }

        public async Task PublishOperationUpdatedAsync(OperationUpdated @event)
            => await _hubContextWrapper.PublishToUserAsync(@event.UserId, 
                "operation_updated",
                new
                {
                    id = @event.Id,
                    name = @event.Name,
                    state = @event.State,
                    code = @event.Code,
                    message = @event.Message,
                    origin = @event.Origin,
                    resource = @event.Resource
                }
            );
    }
}