# z3r0-hue-js

nodejs app for controlling philips hue lights

working with node v16.11.1

git clone, npm i, npm start

see also:

https://developers.meethue.com/develop/get-started-2/

to add your own custom color actions, set the color via the official hue app, then use the `list.groups` menu option to retrieve the configuration from the response, see below for an example response, the `xy` value describes the color

use the `list.groups` menu option to retrieve the group indexes of your philips hue light groups, see below for an example response

```
[ z3r0-hue-js : nodejs application for philips hue api ]
? select an option: (Use arrow keys)
❯ print.config
  list.groups
  mode.white
  mode.blue
  mode.green
  mode.purple
  mode.red
  mode.all.dim
  mode.all.theater
  mode.all.sleep
  mode.all.off
  exit
```

example response after a successful action on a light group

```
[
  {
    "success": {
      "/groups/1/action/on": true
    }
  },
  {
    "success": {
      "/groups/1/action/bri": 254
    }
  },
  {
    "success": {
      "/groups/1/action/xy": [
        0.2409,
        0.276
      ]
    }
  },
  {
    "success": {
      "/groups/1/action/effect": "none"
    }
  }
]
```

example response for getting groups:

```
{
  "1": {
    "name": "bathroom",
    "lights": [
      "2"
    ],
    "sensors": [],
    "type": "Room",
    "state": {
      "all_on": true,
      "any_on": true
    },
    "recycle": false,
    "class": "Bathroom",
    "action": {
      "on": true,
      "bri": 254,
      "hue": 41559,
      "sat": 159,
      "effect": "none",
      "xy": [
        0.2409,
        0.276
      ],
      "ct": 500,
      "alert": "select",
      "colormode": "xy"
    }
  },
  "3": {
    "name": "living.room",
    "lights": [
      "10",
      "9",
      "1",
      "8",
      "6"
    ],
    "sensors": [],
    "type": "Room",
    "state": {
      "all_on": true,
      "any_on": true
    },
    "recycle": false,
    "class": "Living room",
    "action": {
      "on": true,
      "bri": 254,
      "hue": 41559,
      "sat": 159,
      "effect": "none",
      "xy": [
        0.2409,
        0.276
      ],
      "ct": 500,
      "alert": "select",
      "colormode": "xy"
    }
  }
}
```

example response for getting all lights

```
{
  "1": {
    "state": {
      "on": true,
      "bri": 254,
      "hue": 51274,
      "sat": 254,
      "effect": "none",
      "xy": [
        0.275,
        0.1065
      ],
      "ct": 153,
      "alert": "select",
      "colormode": "xy",
      "mode": "homeautomation",
      "reachable": true
    },
    "swupdate": {
      "state": "noupdates",
      "lastinstall": "2021-08-19T21:49:46"
    },
    "type": "Extended color light",
    "name": "kitchen.bulb",
    "modelid": "LCT014",
    "manufacturername": "Signify Netherlands B.V.",
    "productname": "Hue color lamp",
    "capabilities": {
      "certified": true,
      "control": {
        "mindimlevel": 1000,
        "maxlumen": 800,
        "colorgamuttype": "C",
        "colorgamut": [
          [
            0.6915,
            0.3083
          ],
          [
            0.17,
            0.7
          ],
          [
            0.1532,
            0.0475
          ]
        ],
        "ct": {
          "min": 153,
          "max": 500
        }
      },
      "streaming": {
        "renderer": true,
        "proxy": true
      }
    },
    "config": {
      "archetype": "sultanbulb",
      "function": "mixed",
      "direction": "omnidirectional",
      "startup": {
        "mode": "lastonstate",
        "configured": true
      }
    },
    "uniqueid": "00:17:88:01:02:4f:58:55-0b",
    "swversion": "1.88.1",
    "swconfigid": "F48C5CE9",
    "productid": "Philips-LCT014-1-A19ECLv4"
  },
  "2": {
    "state": {
      "on": true,
      "bri": 254,
      "hue": 51274,
      "sat": 254,
      "effect": "none",
      "xy": [
        0.275,
        0.1065
      ],
      "ct": 153,
      "alert": "select",
      "colormode": "xy",
      "mode": "homeautomation",
      "reachable": true
    },
    "swupdate": {
      "state": "noupdates",
      "lastinstall": "2021-08-19T21:49:43"
    },
    "type": "Extended color light",
    "name": "bathroom.bulb",
    "modelid": "LCT014",
    "manufacturername": "Signify Netherlands B.V.",
    "productname": "Hue color lamp",
    "capabilities": {
      "certified": true,
      "control": {
        "mindimlevel": 1000,
        "maxlumen": 800,
        "colorgamuttype": "C",
        "colorgamut": [
          [
            0.6915,
            0.3083
          ],
          [
            0.17,
            0.7
          ],
          [
            0.1532,
            0.0475
          ]
        ],
        "ct": {
          "min": 153,
          "max": 500
        }
      },
      "streaming": {
        "renderer": true,
        "proxy": true
      }
    },
    "config": {
      "archetype": "sultanbulb",
      "function": "mixed",
      "direction": "omnidirectional",
      "startup": {
        "mode": "lastonstate",
        "configured": true
      }
    },
    "uniqueid": "00:17:88:01:02:4f:58:67-0b",
    "swversion": "1.88.1",
    "swconfigid": "F48C5CE9",
    "productid": "Philips-LCT014-1-A19ECLv4"
  },
  "6": {
    "state": {
      "on": true,
      "bri": 254,
      "hue": 51274,
      "sat": 254,
      "effect": "none",
      "xy": [
        0.275,
        0.1065
      ],
      "ct": 153,
      "alert": "select",
      "colormode": "xy",
      "mode": "homeautomation",
      "reachable": true
    },
    "swupdate": {
      "state": "noupdates",
      "lastinstall": "2021-08-19T21:49:38"
    },
    "type": "Extended color light",
    "name": "living.room.bulb",
    "modelid": "LCT016",
    "manufacturername": "Signify Netherlands B.V.",
    "productname": "Hue color lamp",
    "capabilities": {
      "certified": true,
      "control": {
        "mindimlevel": 1000,
        "maxlumen": 800,
        "colorgamuttype": "C",
        "colorgamut": [
          [
            0.6915,
            0.3083
          ],
          [
            0.17,
            0.7
          ],
          [
            0.1532,
            0.0475
          ]
        ],
        "ct": {
          "min": 153,
          "max": 500
        }
      },
      "streaming": {
        "renderer": true,
        "proxy": true
      }
    },
    "config": {
      "archetype": "sultanbulb",
      "function": "mixed",
      "direction": "omnidirectional",
      "startup": {
        "mode": "lastonstate",
        "configured": true
      }
    },
    "uniqueid": "00:17:88:01:03:60:b1:e7-0b",
    "swversion": "1.88.1",
    "swconfigid": "47ACF9B2",
    "productid": "Philips-LCT016-1-A19ECLv5"
  },
  "8": {
    "state": {
      "on": true,
      "bri": 254,
      "hue": 51274,
      "sat": 254,
      "effect": "none",
      "xy": [
        0.275,
        0.1065
      ],
      "ct": 153,
      "alert": "select",
      "colormode": "xy",
      "mode": "homeautomation",
      "reachable": true
    },
    "swupdate": {
      "state": "noupdates",
      "lastinstall": "2021-08-19T21:50:05"
    },
    "type": "Extended color light",
    "name": "living.room.light.strip",
    "modelid": "LST002",
    "manufacturername": "Signify Netherlands B.V.",
    "productname": "Hue lightstrip plus",
    "capabilities": {
      "certified": true,
      "control": {
        "mindimlevel": 25,
        "maxlumen": 1600,
        "colorgamuttype": "C",
        "colorgamut": [
          [
            0.6915,
            0.3083
          ],
          [
            0.17,
            0.7
          ],
          [
            0.1532,
            0.0475
          ]
        ],
        "ct": {
          "min": 153,
          "max": 500
        }
      },
      "streaming": {
        "renderer": true,
        "proxy": true
      }
    },
    "config": {
      "archetype": "huelightstrip",
      "function": "mixed",
      "direction": "omnidirectional",
      "startup": {
        "mode": "lastonstate",
        "configured": true
      }
    },
    "uniqueid": "00:17:88:01:03:65:b2:8c-0b",
    "swversion": "67.88.1"
  },
  "9": {
    "state": {
      "on": true,
      "bri": 254,
      "hue": 51274,
      "sat": 254,
      "effect": "none",
      "xy": [
        0.275,
        0.1065
      ],
      "ct": 153,
      "alert": "select",
      "colormode": "xy",
      "mode": "homeautomation",
      "reachable": true
    },
    "swupdate": {
      "state": "noupdates",
      "lastinstall": "2021-08-19T21:50:03"
    },
    "type": "Extended color light",
    "name": "kitchen.light.strip",
    "modelid": "LST002",
    "manufacturername": "Signify Netherlands B.V.",
    "productname": "Hue lightstrip plus",
    "capabilities": {
      "certified": true,
      "control": {
        "mindimlevel": 25,
        "maxlumen": 1600,
        "colorgamuttype": "C",
        "colorgamut": [
          [
            0.6915,
            0.3083
          ],
          [
            0.17,
            0.7
          ],
          [
            0.1532,
            0.0475
          ]
        ],
        "ct": {
          "min": 153,
          "max": 500
        }
      },
      "streaming": {
        "renderer": true,
        "proxy": true
      }
    },
    "config": {
      "archetype": "huelightstrip",
      "function": "mixed",
      "direction": "omnidirectional",
      "startup": {
        "mode": "safety",
        "configured": true
      }
    },
    "uniqueid": "00:17:88:01:01:1d:6a:65-0b",
    "swversion": "67.88.1"
  },
  "10": {
    "state": {
      "on": true,
      "bri": 254,
      "hue": 51274,
      "sat": 254,
      "effect": "none",
      "xy": [
        0.275,
        0.1065
      ],
      "ct": 153,
      "alert": "select",
      "colormode": "xy",
      "mode": "homeautomation",
      "reachable": true
    },
    "swupdate": {
      "state": "noupdates",
      "lastinstall": "2021-08-19T21:49:41"
    },
    "type": "Extended color light",
    "name": "room.bulb",
    "modelid": "LCT016",
    "manufacturername": "Signify Netherlands B.V.",
    "productname": "Hue color lamp",
    "capabilities": {
      "certified": true,
      "control": {
        "mindimlevel": 1000,
        "maxlumen": 800,
        "colorgamuttype": "C",
        "colorgamut": [
          [
            0.6915,
            0.3083
          ],
          [
            0.17,
            0.7
          ],
          [
            0.1532,
            0.0475
          ]
        ],
        "ct": {
          "min": 153,
          "max": 500
        }
      },
      "streaming": {
        "renderer": true,
        "proxy": true
      }
    },
    "config": {
      "archetype": "sultanbulb",
      "function": "mixed",
      "direction": "omnidirectional",
      "startup": {
        "mode": "safety",
        "configured": true
      }
    },
    "uniqueid": "00:17:88:01:03:60:d3:b8-0b",
    "swversion": "1.88.1",
    "swconfigid": "47ACF9B2",
    "productid": "Philips-LCT016-1-A19ECLv5"
  }
}
```
