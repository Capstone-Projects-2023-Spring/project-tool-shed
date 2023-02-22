const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.createTable('user', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		first_name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		last_name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password_hash: {
			type: Sequelize.STRING,
			allowNull: false
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		deletedAt: {
			type: Sequelize.DATE,
			allowNull: true
		}
	});
	await queryInterface.createTable('address', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		line_one: {
			type: DataTypes.STRING,
			allowNull: false
		},
		line_two: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		zip_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		geocoded: {
			default: false,
			type: DataTypes.BOOLEAN
		},
		geocoded_lat: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		geocoded_lon: {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		deletedAt: {
			type: Sequelize.DATE,
			allowNull: true
		}
	});

	// TODO: foreign keys
}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('address');
	await queryInterface.dropTable('user');
}

module.exports = { up, down };
