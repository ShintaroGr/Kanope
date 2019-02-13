const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/database')
const cors = require('cors')
const request = require('request')
const Building = require('./models/building')

mongoose.connect(config.database)

const api = require('./routes/api')

const app = express()

app.use(cors())

app.use('/', api)

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500).send()
})

app.listen(5000)

// Get {{rows}} building with an offset of {{start}}
function getDataFromAPI ({start = 0, rows = 100} = {}) {
  request('https://public.opendatasoft.com/api/records/1.0/search/?dataset=potentiel-gisement-solaire-brut-au-bati&rows=' + rows + '&start=' + start, function (error, response, body) {
    if (response && response.statusCode !== 400) {
      const data = JSON.parse(body).records
      data.forEach((value) => {
        const newBuilding = new Building(value.fields)
        Building.findById(value.fields.objectid, function (err, building) {
          if (!building) {
            newBuilding._id = value.fields.objectid
            newBuilding.save()
          } else {
            building.m2_e_in700 = newBuilding.m2_e_in700
            building.m2_e_70_80 = newBuilding.m2_e_70_80
            building.m2_e_80_90 = newBuilding.m2_e_80_90
            building.m2_e_90_10 = newBuilding.m2_e_90_10
            building.m2_e_s1000 = newBuilding.m2_e_s1000
            building.m2_e_tot = newBuilding.m2_e_tot
            building.c_ens_moy = newBuilding.c_ens_moy
            building.update()
          }
        })
      })
    }
  })
}

getDataFromAPI()

let start = 0

// Get 1000 building every hours
setInterval(function () {
  start += 100
  getDataFromAPI({start: start, rows: 1000})
  if (start >= 10000) {
    start = 0
  }
}, 60 * 60 * 1000)

module.exports = app
