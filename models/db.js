const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/trip-planner', {
	logging: false
});

module.exports = db;