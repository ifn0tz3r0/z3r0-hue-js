const fetch = require('node-fetch')
const inq = require('inquirer')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const constants = {
  CONFIG: {
    /* the ip address of your hue hub */
    IP: `192.168.0.155`,
    /* username for your hue hub */
    USERNAME: `-cl3CKsN3O3F74GACqx-Zs9lDnwTn2zLtoCuGF20`
  },
  /* group indexes as set via the hue app */
  GROUPS: {
    LIVINGROOM: 1,
    BEDROOM: 2,
    BATHROOM: 3
  },
  /* color and brightness configurations, these are sent to light groups via a put request */
  ACTIONS: {
    ACTION_WHITE: {
      on: true,
      bri: 254,
      effect: `none`,
      xy: [0.2409, 0.276]
    },
    ACTION_BLUE: {
      on: true,
      bri: 254,
      effect: `none`,
      xy: [0.1411, 0.0985]
    },
    ACTION_GREEN: {
      on: true,
      bri: 254,
      effect: `none`,
      xy: [0.161, 0.3517]
    },
    ACTION_PURPLE: {
      on: true,
      bri: 254,
      effect: `none`,
      xy: [0.275, 0.1066]
    },
    ACTION_RED: {
      on: true,
      bri: 254,
      effect: `none`,
      xy: [0.6751, 0.3193]
    },
    ACTION_DIM: {
      on: true,
      bri: 150
    },
    ACTION_THEATER: {
      on: true,
      bri: 50
    },
    ACTION_SLEEP: {
      on: true,
      bri: 8
    },
    ACTION_OFF: {
      on: false
    }
  },
  MENU: {
    MENU_PRINT_CONFIG: `print.config`,
    MENU_GET_GROUPS: `get.groups`,
    MENU_GET_LIGHTS: `get.lights`,
    MENU_MODE_WHITE: `mode.white`,
    MENU_MODE_BLUE: `mode.blue`,
    MENU_MODE_GREEN: `mode.green`,
    MENU_MODE_PURPLE: `mode.purple`,
    MENU_MODE_RED: `mode.red`,
    MENU_MODE_ALL_DIM: `mode.all.dim`,
    MENU_MODE_ALL_THEATER: `mode.all.theater`,
    MENU_MODE_ALL_SLEEP: `mode.all.sleep`,
    MENU_MODE_ALL_OFF: `mode.all.off`,
    MENU_EXIT: `exit`
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* method to perform a configuration change on a light group */
async function actionOnGroup(g, a) {
  const response = await fetch(`http://${constants.CONFIG.IP}/api/${constants.CONFIG.USERNAME}/groups/${g}/action`, {
    method: `PUT`,
    body: JSON.stringify(a)
  })
  const json = await response.json()
  console.log(JSON.stringify(json, null, 2))
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* method to return all light groups */
async function getHueGroups() {
  const response = await fetch(`http://${constants.CONFIG.IP}/api/${constants.CONFIG.USERNAME}/groups`, {
    method: `GET`
  })
  const json = await response.json()
  console.log(JSON.stringify(json, null, 2))
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* method to return all lights */
async function getHueLights() {
  const response = await fetch(`http://${constants.CONFIG.IP}/api/${constants.CONFIG.USERNAME}/lights`, {
    method: `GET`
  })
  const json = await response.json()
  console.log(JSON.stringify(json, null, 2))
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function returnToMenu() {
  await inq
    .prompt([
      {
        type: 'list',
        message: 'select an option:',
        choices: [`return to menu`],
        name: `choice`
      }
    ])
    .then(answer => {
      return answer.choice
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* main application logic */
(async () => {
  try {
    let loop = true
    let cache = null

    do {
      /* clear the screen */
      console.clear()
      console.log(`[ z3r0-hue-js : nodejs application for philips hue api ]`)

      let choice = await inq
        .prompt([
          {
            type: 'list',
            message: 'select an option:',
            choices: [
              constants.MENU.MENU_PRINT_CONFIG,
              constants.MENU.MENU_GET_GROUPS,
              constants.MENU.MENU_GET_LIGHTS,
              constants.MENU.MENU_MODE_WHITE,
              constants.MENU.MENU_MODE_BLUE,
              constants.MENU.MENU_MODE_GREEN,
              constants.MENU.MENU_MODE_PURPLE,
              constants.MENU.MENU_MODE_RED,
              constants.MENU.MENU_MODE_ALL_DIM,
              constants.MENU.MENU_MODE_ALL_THEATER,
              constants.MENU.MENU_MODE_ALL_SLEEP,
              constants.MENU.MENU_MODE_ALL_OFF,
              constants.MENU.MENU_EXIT
            ],
            name: `choice`,
            default: cache,
            pageSize: 50
          }
        ])
        .then(answer => {
          return answer.choice
        })

      cache = choice

      switch (choice) {
        case constants.MENU.MENU_PRINT_CONFIG:
          console.log(constants.CONFIG)
          break
        case constants.MENU.MENU_GET_GROUPS:
          await getHueGroups()
          break
        case constants.MENU.MENU_GET_LIGHTS:
          await getHueLights()
          break
        case constants.MENU.MENU_MODE_WHITE:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_WHITE)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_WHITE)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_WHITE)
          break
        case constants.MENU.MENU_MODE_BLUE:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_BLUE)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_BLUE)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_BLUE)
          break
        case constants.MENU.MENU_MODE_GREEN:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_GREEN)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_GREEN)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_GREEN)
          break
        case constants.MENU.MENU_MODE_PURPLE:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_PURPLE)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_PURPLE)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_PURPLE)
          break
        case constants.MENU.MENU_MODE_RED:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_RED)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_RED)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_RED)
          break
        case constants.MENU.MENU_MODE_ALL_DIM:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_DIM)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_DIM)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_DIM)
          break
        case constants.MENU.MENU_MODE_ALL_THEATER:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_THEATER)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_THEATER)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_THEATER)
          break
        case constants.MENU.MENU_MODE_ALL_SLEEP:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_SLEEP)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_SLEEP)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_SLEEP)
          break
        case constants.MENU.MENU_MODE_ALL_OFF:
          await actionOnGroup(constants.GROUPS.LIVINGROOM, constants.ACTIONS.ACTION_OFF)
          await actionOnGroup(constants.GROUPS.BEDROOM, constants.ACTIONS.ACTION_OFF)
          await actionOnGroup(constants.GROUPS.BATHROOM, constants.ACTIONS.ACTION_OFF)
          break
        case constants.MENU.MENU_EXIT:
          process.exit(0)
      }
      await returnToMenu()
    } while (loop === true)
  } catch (e) {
    console.log(e)
  }
})()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
