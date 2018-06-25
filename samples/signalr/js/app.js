'use strict';
(function() {
    const connection = new signalR.HubConnection('http://localhost:5007/dshop');
    let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YmUwMzQ3Zi05ODFjLTRhYjktOTg5MS1lYTcxMjVjMGU1NmEiLCJ1bmlxdWVfbmFtZSI6IjZiZTAzNDdmLTk4MWMtNGFiOS05ODkxLWVhNzEyNWMwZTU2YSIsImp0aSI6ImQ2YTEyZWU3LTRkZjQtNDhjNy04YTJmLTNjMDg0NWY4YjQwOSIsImlhdCI6IjE1MjYxMjM5NjI3MzEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsIm5iZiI6MTUyNjEyMzk2MiwiZXhwIjoxNTI2MTI1NzYyLCJpc3MiOiJkc2hvcC1pZGVudGl0eS1zZXJ2aWNlIn0.RiplH8pF1EB0MG8dNU38BPShwmRYEjf0gs0J2baNw2Q';
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