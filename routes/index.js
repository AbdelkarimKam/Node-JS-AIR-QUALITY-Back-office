var express = require('express');
var router = express.Router();
const got = require('got');
const { pipeline } = require('stream');
const myUrlWithParams = new URL("https://api.airvisual.com/v2/nearest_city");

myUrlWithParams.searchParams.append("key", "d769c4ab-f1f1-4847-af85-195fc93dbdc1");

router.get('/airquality/zone', function (req, res, next) {

  myUrlWithParams.searchParams.append("lat", req.body.latitude);
  myUrlWithParams.searchParams.append("lon", req.body.longitude);

  const dataStream = got.stream(myUrlWithParams);

  pipeline(dataStream, res, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(res.dataStream)
    }
  });
});

module.exports = router;
