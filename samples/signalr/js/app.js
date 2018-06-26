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

    connection.on('operation_updated', (message) => {
        console.log('Operation updated.', message)
    });
})();