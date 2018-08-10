using System;
using DShop.Common.Messages;
using Newtonsoft.Json;

namespace DDShop.Services.Signalr.Messages.Events
{
    public class OperationUpdated : IEvent
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Origin { get; set; }
        public string Resource { get; set; }
        public string State { get; set; }
        public string Code { get; set; }
        public string Message { get; set; }

        [JsonConstructor] 
        public OperationUpdated(Guid id,
            Guid userId, string name, 
            string origin, string resource,
            string state,string code, 
            string message)
        {
            Id = id;
            UserId = userId;
            Name = name;
            Origin = origin;
            Resource = resource;
            State = state;
            Code = code;
            Message = message;
        }
    }
}