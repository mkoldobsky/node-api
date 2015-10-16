// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var Campaign     = require('./app/models/campaign');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8093;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/campaign')

		.get(function(req,res){
			console.log('get');
			res.json([{id:1, name:'Ayudemos a Superman'}, {id:2, name:'Otra'}]);

		})
    // create a bear (accessed at POST http://localhost:8093/api/campaign)
    .post(function(req, res) {

        var campaign = new Campaign();
        campaign.name = req.body.name;

				console.log(req.body);

      //  campaign.save(function(err) {
      //      if (err)
      //          res.send(err);

            res.json({ message: 'Campaign created! ' + campaign.name });
      //  });

    });

router.route('/campaign/:campaign_id')


	    .get(function(req, res) {
				res.json({id:req.params.bear_id, name:"nombre"});
	        // Bear.findById(req.params.bear_id, function(err, bear) {
	        //     if (err)
	        //         res.send(err);
	        //     res.json(bear);
	        // });
	    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
