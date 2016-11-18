const router = require('express').Router();
const Promise = require('bluebird');
const models = require('../../models');
const Hotel = require('../../models/hotel');
const Activity = require('../../models/activity');
const Place = require('../../models/place');
const Restaurant = require('../../models/restaurant');
module.exports = router;

router.get('/', function(req, res, next) {
	var findHotels = Hotel.findAll({

	});

	var findActivity = Activity.findAll({

	});

	var findPlace = Place.findAll({

	});

	var findRestaurant = Restaurant.findAll({

	});

	Promise.all([findHotels, findActivity, findPlace, findRestaurant])
		.spread(function(hotel, activity, place, restaurant) {
			res.render('index', {
				hotels: hotel,
				activities: activity,
				places: place,
				restaurants: restaurant
			})
		})
		.catch(next);
})