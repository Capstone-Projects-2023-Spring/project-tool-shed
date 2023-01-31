const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = sequelize => ({
	ToolType: sequelize.define('ToolType', {
		name: DataTypes.STRING
	}, {paranoid: true})
});
