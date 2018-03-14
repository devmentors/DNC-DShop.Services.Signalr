'use strict';
(function() {
    const connection = new signalR.HubConnection('http://localhost:5007/dshop');
    let jwt = 'authentication_token';
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
        console.log('Disconnected.');
    });

    connection.on('operation_updated', (message) => {
        console.log('Operation updated.', message)
    });
})();