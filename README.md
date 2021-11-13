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