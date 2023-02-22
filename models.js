const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
	/*
		User model
	*/
	const User = sequelize.define('User', {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password_hash: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: "user",
		paranoid: true, // soft delete enabled
	});

	User.prototype.setPassword = async function(v) {
		const s = await bcrypt.genSalt(10);
		this.password_hash = await bcrypt.hash(v, s);
	};

	User.prototype.passwordMatches = async function(v) {
		return await bcrypt.compare(v, this.password_hash);
	};

	/*
		Address model
	*/

	const Address = sequelize.define('Address', {
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
	}, {tableName: 'address', paranoid: true});

	Address.hasMany(User, {foreignKey: 'address_id'});

	Address.prototype.getCoordinates = async function() {
		const {lat, lon} = {lat: null, lon: null}; // TODO: do the geocoding
		this.geocoded = lat && lon;
		this.geocoded_lat = lat;
		this.geocoded_lon = lon;
	};

	Address.addHook('beforeUpsert', 'do_geocoding', (a, opts) => {
		a.getCoordinates();
	});

	return {User, Address};
};
