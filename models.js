/**
 * Model definitions.
 * @module models
 */

const bcrypt = require('bcrypt');

const genModels = (sequelize, DataTypes) => {
	/**
	 * @class User
         * @classdesc Represents a user.
	 * @augments sequelize.Model
         * @property {string} module:models~User#first_name The user's first name
	 * @property {string} last_name The user's last name
         * @property {string} email The user's email, used for logging in
         * @property {string} password_hash A hashed version of the user's password using bcrypt. Not to be set directly, use setPassword and passwordMatches().
	 * @property {int} address_id The ID of an Address record for the user.
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

	/**
         * Sets a user's password. 
	 * @param {string} v The user's new password.
	 * @method module:models~User#setPassword
         */
	User.prototype.setPassword = async function(v) {
		const s = await bcrypt.genSalt(10);
		this.password_hash = await bcrypt.hash(v, s);
	};

	/**
	 * Determines if a given password matches a user's password.
	 * @param {string} v The password to test
	 * @return {boolean} Whether or not the password matched.
	 * @method module:models~User#passwordMatches
	 */
	User.prototype.passwordMatches = async function(v) {
		return await bcrypt.compare(v, this.password_hash);
	};

	/**
	 * @class Address
         * @classdesc Represents an address.
	 * @augments sequelize.Model
         * @property {string} line_two
	 * @property {string} city
	 * @property {string} state - The state of the address, should be a 2-digit uppercase value like "NJ" or "PA"
	 * @property {string} zip_code
	 * @property {bool} geocoded - Whether or not the address has been geocoded yet
	 * @property {double} geocoded_lat - the latitude value from geocoding - not user set
	 * @property {double} geocoded_lon - the longitude value from geocoding - not user set
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

	/**
	 * Geocodes the address and sets {@link module:models~Address}#geocoded_lat & {@link module:models~Address}#geocoded_lon.
	 * @method module:models~Address#getCoordinates
	 */
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

module.exports = genModels;
