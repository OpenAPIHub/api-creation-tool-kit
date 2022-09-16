'use strict';
  
console.log('Loading function');
  
// Update here to import your module
const clock = require('world-clock')()
  
exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
  
    const done = (err, res) => callback(null, {
        statusCode: err ? 400 : 200,
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
      
    try {
        // Define and get query string input here
        var parm1 = event.queryStringParameters['timezone'];
      
        // Define and get input header here
        //var header1 = event.headers['timezone'];
      
        // Get the request path. If using ALB, pathParameters can only get from the path
        //var req_path = event.path;
          
        // Get the request path.
        //var req_body = event.body;
      
        switch (event.httpMethod) {
            case 'DELETE':
                // Define application logic here and comment the error handling
                done(new Error(`Unsupported method "${event.httpMethod}"`));
                break;
            case 'GET':
                // Define application logic here and comment the error handling
                var result = clock.today(parm1).toString();
                done(null,result);
                //done(new Error(`Unsupported method "${event.httpMethod}"`));
                break;
            case 'POST':
                // Define application logic here and comment the error handling
                done(new Error(`Unsupported method "${event.httpMethod}"`));
                break;
            case 'PUT':
                // Define application logic here and comment the error handling
                done(new Error(`Unsupported method "${event.httpMethod}"`));
                break;
            default:
                done(new Error(`Unsupported method "${event.httpMethod}"`));
        }
    } catch (error) {
        console.error(error);
        done(new Error(`Bad Request`));
    }
};
