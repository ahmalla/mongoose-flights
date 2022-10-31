const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airplane: String,
  airport: String,
  flightNo: Number,
  departs: Date,
});