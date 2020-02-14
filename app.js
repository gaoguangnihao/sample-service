window.addEventListener('load', function() {
  console.log('sample, background service');
});

navigator.mozSetMessageHandler('connection', function(request) {
  if (request.keyword !== 'sample-service') {
    return;
  }
  let port = request.port;
  port.onmessage = function(e) {
    console.log('sample, IAC message from System: ' + JSON.stringify(e.data));
  }
  port.start();
});
