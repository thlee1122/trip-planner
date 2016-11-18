const Sequelize = require('sequelize');

const db = require('./db');

const Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	amenities: {
		type: Sequelize.STRING,
		allowNull: false
	}
})


module.exports = Hotel;