using System.Threading.Tasks;
using DDShop.Services.Signalr.Messages.Events;

namespace DShop.Services.Signalr.Services
{
    public interface IHubService
    {
        Task PublishOperationUpdatedAsync(OperationUpdated @event);
    }
}