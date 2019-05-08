const https = require('https');


const options = {
  host: 'www.example.org',
  path: '/'
};

const callback = (response) => {
  console.log('In response handler callback!');

  response.on('data', (chunk) => {
    console.log(`[-- CHUNK OF LENGTH ${chunk.length} --]`);
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options,callback).end();