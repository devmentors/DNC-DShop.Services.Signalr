using System.Threading.Tasks;
using DShop.Services.Signalr.Messages.Events;

namespace DShop.Services.Signalr.Services
{
    public interface IHubService
    {
        Task PublishOperationPendingAsync(OperationPending @event);
        Task PublishOperationCompletedAsync(OperationCompleted @event);
        Task PublishOperationRejectedAsync(OperationRejected @event);
    }
}