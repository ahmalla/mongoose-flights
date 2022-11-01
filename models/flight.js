const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  arrival: Date
});
	
const flightSchema = new Schema({
  airline: { type: String, enum: ['American', 'Southwest', 'United'] },
  airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: { type: Date },
  destination: [destinationSchema] 
});

module.exports = mongoose.model('Flight', flightSchema);