const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
  };

 



  function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
  var flight = new Flight(req.body);
//   const dt = newFlight.departs;
// let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
// departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
// res.render('flights/new', { departsDate });
flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    if (err) {
      console.log(err);
      res.redirect('/');
    }
    res.render('flights/index', { flights });
  });
}
function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Detail', flight });
  });
};