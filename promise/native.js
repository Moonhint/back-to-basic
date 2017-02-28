var getContent = function() {
  // return new pending promise
  return new Promise((resolve, reject) => {
    var http = require('http');

    return http.get({
        host: 'api.icndb.com',
        path: '/jokes/random'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            resolve(body);
        });
        response.on('error', (err) => reject(err))
    });

  });
};


getContent()
  .then((html) => console.log(html))
  .catch((err) => console.error(err));
