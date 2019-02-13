const express = require('express')
const router = express.Router()
const Building = require('../models/building')

router.get('/buildings', (req, res) => {
  Building.find({}, function (err, buildings) {
    let value = {
      less_than_700: {
        average: 0,
        sum: 0,
        count: 0
      },
      between_700_800: {
        average: 0,
        sum: 0,
        count: 0
      },
      between_800_900: {
        average: 0,
        sum: 0,
        count: 0
      },
      between_900_1000: {
        average: 0,
        sum: 0,
        count: 0
      },
      more_than_1000: {
        average: 0,
        sum: 0,
        count: 0
      }
    }

    buildings.forEach((building) => {
      if (building.m2_e_in700 !== 0) {
        value.less_than_700.count += 1
        value.less_than_700.sum += building.m2_e_in700
      }
      if (building.m2_e_70_80 !== 0) {
        value.between_700_800.count += 1
        value.between_700_800.sum += building.m2_e_70_80
      }
      if (building.m2_e_80_90 !== 0) {
        value.between_800_900.count += 1
        value.between_800_900.sum += building.m2_e_80_90
      }
      if (building.m2_e_90_10 !== 0) {
        value.between_900_1000.count += 1
        value.between_900_1000.sum += building.m2_e_90_10
      }
      if (building.m2_e_s1000 !== 0) {
        value.more_than_1000.count += 1
        value.more_than_1000.sum += building.m2_e_s1000
      }
    })

    value.less_than_700.average = value.less_than_700.sum / value.less_than_700.count
    value.between_700_800.average = value.between_700_800.sum / value.between_700_800.count
    value.between_800_900.average = value.between_800_900.sum / value.between_800_900.count
    value.between_900_1000.average = value.between_900_1000.sum / value.between_900_1000.count
    value.more_than_1000.average = value.more_than_1000.sum / value.more_than_1000.count
    return res.status(200).send(value)
  })
})
module.exports = router
