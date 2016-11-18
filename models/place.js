const Sequelize = require('sequelize');

const db = require('./db');

const Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT),
		allowNull: false
	}
})

module.exports = Place;

