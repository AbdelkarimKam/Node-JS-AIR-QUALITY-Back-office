const mongoose = require('mongoose');

const airQualitySchema = mongoose.Schema({
    "data": {
      "city": {
        "type": "String"
      },
      "state": {
        "type": "String"
      },
      "country": {
        "type": "String"
      },
      "location": {
        "type": {
          "type": "String"
        },
        "coordinates": {
          "type": [
            "Number"
          ]
        }
      },
      "current": {
        "pollution": {
          "ts": {
            "type": "Date"
          },
          "aqius": {
            "type": "Number"
          },
          "mainus": {
            "type": "String"
          },
          "aqicn": {
            "type": "Number"
          },
          "maincn": {
            "type": "String"
          }
        },
        "weather": {
          "ts": {
            "type": "Date"
          },
          "tp": {
            "type": "Number"
          },
          "pr": {
            "type": "Number"
          },
          "hu": {
            "type": "Number"
          },
          "ws": {
            "type": "Number"
          },
          "wd": {
            "type": "Number"
          },
          "ic": {
            "type": "String"
          }
        }
      }
    }
  })

  module.exports = mongoose.model('AirQuality', airQualitySchema);