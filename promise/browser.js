if (window.Promise) {
  console.log('Promise found');

  var promise = new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.icndb.com/jokes/random');
    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };

    request.onerror = function() {
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };

    request.send(); //send the request
  });

  console.log('Asynchronous request made.');

  promise.then(function(data) {
    console.log('Got data! Promise fulfilled.');
    document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value.joke;
  }, function(error) {
    console.log('Promise rejected.');
    console.log(error.message);
  });
} else {
  console.log('Promise not available');
}
