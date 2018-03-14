using System.Threading.Tasks;
using DShop.Messages.Events.Operations;

namespace DShop.Services.Signalr.Services
{
    public interface IHubService
    {
        Task PublishOperationUpdatedAsync(OperationUpdated @event);
    }
}