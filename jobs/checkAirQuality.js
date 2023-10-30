const cron = require('node-cron');
const AirQuality = require('../models/AirQuality');
const got = require('got');
const { pipeline } = require('stream');
const myUrlWithParams = new URL("http://api.airvisual.com/v2/cities");

myUrlWithParams.searchParams.append("key", "d769c4ab-f1f1-4847-af85-195fc93dbdc1");
myUrlWithParams.searchParams.append("country", "France");
myUrlWithParams.searchParams.append("state", "Ile-de-France");

const dataStream = got.stream(myUrlWithParams);

// Schedule tasks to be run on the server.
cron.schedule("* * * * *", () => {
      console.log("I'm executed on a schedule!");
    
      pipeline(dataStream, res, (err) => {
        if (err) {
          console.log(err);
        } else {
            console.log(res.dataStream);

            // update database 
        }
      });
    });
  
  // Remove the error.log file every twenty-first day of the month.

module.exports = cron;