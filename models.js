/**
 * Model definitions.
 * @module models
 */

const {DataTypes, QueryTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const genModels = sequelize => {
	/**
	 * @class User
         * @classdesc Represents a user.
	 * @augments sequelize.Model
         * @property {string} first_name The user's first name
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
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	}, {
		tableName: "user",
		paranoid: true, // soft delete enabled
	});
	

	// TODO: rewrite setPassword into a setter on password_hash
	// https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/#setters

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

	User.belongsTo(Address, {foreignKey: 'address_id', as: 'address'});
	User.belongsTo(Address, {foreignKey: 'billing_address_id', as: 'billing_address'});

	/**
	 * Gets coordinates for a string address.
	 * @param {string} addressString An address in string form, similar to but not necessarily formatted like "123 Example Street, Exampleton, CA 12345"
	 * @returns {object} coordinate The coordinate the address geocodes to (`{lat, lon}`)
	 * @method module:models~Address.geocode
	 * @async
	 */
	Address.geocode = async function(addressString) {
		let coord = null;
		let err = null;
		try {
			const {coordinate, error} = await fetch(`http://0.0.0.0:5001/?address=${encodeURIComponent(addressString)}`).then(r => r.json());		
			coord = coordinate;
			err = error;
		} catch (e) {
			err = e.toString();
		}

		if (coord) {
			const {lat, lon, accuracyPercent} = coord;
			console.log(`Geocoded "${addressString}" to (${lat}, ${lon}) (accuracy: ${accuracyPercent}%)`);
			return {lat, lon};
		}

		console.log(`Failed to geocode "${addressString}: ${err ? err : "unknown error"}".`);
		return null;
	};

	/**
	 * Returns a string representing the address.
	 * @method module:models~Address#stringValue
	 * @returns {string} A string representing the address, suitable for display or geocoding.
	 */
	Address.prototype.stringValue = function() {
		let r = `${this.line_one}`;
		if (this.line_two) r += `\n${this.line_two}`;
		r += `\n${this.city}, ${this.state} ${this.zip_code}`;
		return r;
	};

	/**
	 * Gets coordinates for the address.
	 * @returns {object} coordinate The coordinate the address geocodes to (`{lat, lon}`)
	 * @method module:models~Address#getCoordinates
	 */
	Address.prototype.getCoordinates = async function() {
		return Address.geocode(this.stringValue());
	};

	Address.addHook('beforeSave', 'do_geocoding', async (a, opts) => {
		const coords = await a.getCoordinates();
		a.geocoded = !!coords;
		if (a.geocoded) {
			a.geocoded_lat = coords.lat;
			a.geocoded_lon = coords.lon;
		}
	});

	const ToolMaker = sequelize.define('ToolMaker', {

	}, {tableName: 'tool_maker', paranoid: true});

	const ToolCategory = sequelize.define("ToolCategory", {
		name: {type: DataTypes.STRING, allowNull: false}
	}, {tableName: "tool_category", paranoid: true});

	const Tool = sequelize.define('Tool', {
		tool_id:{
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tool_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING, 
			allowNull: true
		},

	}, {tableName: 'tool', paranoid: true});
	Tool.belongsTo(User, {
		foreignKey: {
			name: 'owner_id',
			allowNull: false
		},
		as: 'owner'
	});
	User.hasMany(Tool, {as: "tools"});

	const Listing = sequelize.define("Listing", {
		price: {type: DataTypes.DECIMAL, allowNull: false},
	}, {tableName: 'listing', paranoid: true});
	Listing.belongsTo(Tool, {
		foreignKey: {
			name: 'tool_id',
			allowNull: false
		},
		as: 'tool'
	});
	Tool.hasMany(Listing, {as: 'listings'});

	return {User, Address, ToolCategory, ToolMaker, Tool, Listing};
};

module.exports = genModels;
