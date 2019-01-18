'use strict';
(function() {
    const $messages = document.getElementById("messages");
    const connection = new signalR.HubConnectionBuilder()
        .withUrl('http://localhost:5007/dshop')
        .configureLogging(signalR.LogLevel.Information)
        .build();

    const jwt = 'token';
    
    appendMessage("Connecting to DShop Hub...");

    connection.start()
      .then(() => {
        connection.invoke('initializeAsync', jwt);
      })
      .catch(err => appendMessage(err));

    connection.on('connected', _ => {
        appendMessage("Connected.", "primary");
    });

    connection.on('disconnected', _ => {
        appendMessage("Disconnected, invalid token.", "danger");
    });

    connection.on('operation_pending', (operation) => {
        appendMessage('Operation pending.', "light", operation);
    });

    connection.on('operation_completed', (operation) => {
        appendMessage('Operation completed.', "success", operation);
    });

    connection.on('operation_rejected', (operation) => {
        appendMessage('Operation rejected.', "danger", operation);
    });
    
    function appendMessage(message, type, data) {
        var dataInfo = "";
        if (data) {
            dataInfo += "<div>" + JSON.stringify(data) + "</div>";
        }
        $messages.innerHTML += `<li class="list-group-item list-group-item-${type}">${message} ${dataInfo}</li>`;
    }
})();