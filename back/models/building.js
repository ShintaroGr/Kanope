const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BuildingSchema = new Schema({
  _id: Number,
  m2_e_in700: Number,
  m2_e_70_80: Number,
  m2_e_80_90: Number,
  m2_e_90_10: Number,
  m2_e_s1000: Number,
  m2_e_tot: Number,
  c_ens_moy: Number,
})

module.exports = mongoose.model('Building', BuildingSchema)
