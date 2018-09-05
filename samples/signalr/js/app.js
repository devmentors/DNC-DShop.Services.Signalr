'use strict';
(function() {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl('http://localhost:5007/dshop')
        .configureLogging(signalR.LogLevel.Information)
        .build();

    let jwt = 'auth_token';
    console.log('Connecting to DShop Hub...');

    connection.start()
      .then(() => {
        connection.invoke('initializeAsync', jwt);
      })
      .catch(err => console.log(err));

    connection.on('connected', _ => {
        console.log('Connected.');
    });

    connection.on('disconnected', _ => {
        console.log('Disconnected, invalid token.');
    });

    connection.on('operation_pending', (operation) => {
        console.log('Operation pending.', operation)
    });

    connection.on('operation_completed', (operation) => {
        console.log('Operation completed.', operation)
    });

    connection.on('operation_rejected', (operation) => {
        console.log('Operation rejected.', operation)
    });
})();