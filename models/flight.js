const mongoose = require('mongoose');

const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  Airline: { type: String, enum: ['American', 'Southwest', 'United'] },
  Airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
  FlightNo: { type: Number, min: 10, max: 9999 },
  Departs: { type: Date }, 
});

module.exports = mongoose.model('Flight', flightSchema);