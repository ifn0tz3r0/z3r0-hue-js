const rp = require('request-promise-native')
const inq = require('inquirer')

//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
let groups = {
  livingRoom: 1,
  bedroom: 2,
  bathroom: 3
}
//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
let config = {
  ip: `192.168.1.74`,
  uname: `-cl3CKsN3O3F74GACqx-Zs9lDnwTn2zLtoCuGF20`,
  bAllowInput: true,
  msPostRequestSleep: 500,
  inputInterval: null
}
//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
let actions = {
  actionDefault: {
    on: true,
    bri: 254,
    effect: `none`,
    xy: [0.1411, 0.0985]
  },
  actionDefaultDim: {
    on: true,
    bri: 150,
    effect: `none`,
    xy: [0.1411, 0.0985]
  },
  actionDefaultTheater: {
    on: true,
    bri: 50,
    effect: `none`,
    xy: [0.1411, 0.0985]
  },
  actionNightLight: {
    on: true,
    bri: 10,
    effect: `none`,
    xy: [0.1411, 0.0985]
  },
  actionMorningGetReady: {
    on: true,
    bri: 254,
    effect: `none`,
    xy: [0.2409, 0.276]
  },
  actionClean: {
    on: true,
    bri: 254,
    effect: `none`,
    xy: [0.2409, 0.276]
  },
  actionEmergency: {
    on: true,
    bri: 254,
    effect: `none`,
    xy: [0.6751, 0.3193]
  },
  actionOff: {
    on: false
  }
}
//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
async function actionOnGroup(g, a, msSleepDelay) {
  var options = {
    method: `PUT`,
    uri: `http://${config.ip}/api/${config.uname}/groups/${g}/action`,
    json: true,
    body: a
  }
  await rp(options)
    .then(function(j) {
      console.log(j)
      sleep(msSleepDelay)
      return true
    })
    .catch(function(err) {
      console.log(err)
      return false
    })
}
async function returnToMenu() {
  await inq
    .prompt([
      {
        type: 'list',
        message: ':',
        choices: [`return to menu`],
        name: `choice`
      }
    ])
    .then(answer => {
      return answer.choice
    })
}
//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
async function getHueGroups() {
  var options = {
    uri: `http://${config.ip}/api/${config.uname}/groups`
  }
  await rp(options)
    .then(function(j) {
      console.log(j)

      let jsn = JSON.parse(j)

      console.log(jsn)

      console.log(`names:`)
      for (var key in jsn) {
        console.log(jsn[key].name)
        console.log(jsn[key].action.xy)
      }
    })
    .catch(function(err) {
      console.log(err)
    })
}

const loop = true
//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
;(async () => {
  while (loop) {
    console.log(`ip: [${config.ip}]`)

    let loop = true
    let cache = null
    while (loop) {
      process.stdout.write('\x1bc')
      console.log(`\r\n`)
      let choices = [
        `printip`,
        `listgroups`,
        `mode/default`,
        `mode/default/dim`,
        `mode/default/theater`,
        `mode/morning/getReady`,
        `mode/clean`,
        `mode/emergency`,
        `mode/sleep`,
        `mode/dark`
      ]
      let choice = await inq
        .prompt([
          {
            type: 'list',
            message: 'select an option:',
            choices: choices,
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
        case `printip`:
          console.log(config.ip)
          console.log(`\r\n`)
          break
        case `listgroups`:
          await getHueGroups()
          break
        case `mode/default`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionDefault,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionDefault,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionDefault,
            config.msPostRequestSleep
          )
          break
        case `mode/default/dim`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionDefaultDim,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionDefaultDim,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionDefaultDim,
            config.msPostRequestSleep
          )
          break
        case `mode/default/theater`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionDefaultTheater,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionDefaultTheater,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionDefaultTheater,
            config.msPostRequestSleep
          )
          break
        case `mode/morning/getReady`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionDefault,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionDefault,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionMorningGetReady,
            config.msPostRequestSleep
          )
          break
        case `mode/clean`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionClean,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionClean,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionClean,
            config.msPostRequestSleep
          )
          break
        case `mode/emergency`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionEmergency,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionEmergency,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionEmergency,
            config.msPostRequestSleep
          )
          break
        case `mode/sleep`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionNightLight,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionOff,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionNightLight,
            config.msPostRequestSleep
          )
          break
        case `mode/dark`:
          await actionOnGroup(
            groups.livingRoom,
            actions.actionOff,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bedroom,
            actions.actionOff,
            config.msPostRequestSleep
          )
          await actionOnGroup(
            groups.bathroom,
            actions.actionOff,
            config.msPostRequestSleep
          )
          break
      }
      console.log(`\r\n`)
      await returnToMenu()
    }
  }
})()
//  ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// ///// /////
