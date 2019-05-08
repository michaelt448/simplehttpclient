const https = require('https');


const options = {
  host: 'www.example.org',
  path: '/'
};

const callback = (response) => {
  console.log('In response handler callback!');

  console.log('Response: ', response);
}

console.log("I'm about to make the request!");

https.request(options,callback).end();