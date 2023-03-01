---
sidebar_position: 2
description: JSDoc-generated API docs
---

## Modules

<dl>
<dt><a href="#module_boilerplate">boilerplate</a></dt>
<dd></dd>
<dt><a href="#module_models">models</a></dt>
<dd><p>Model definitions.</p>
</dd>
</dl>

<a name="module_boilerplate"></a>

## boilerplate

* [boilerplate](#module_boilerplate)
    * [~settings](#module_boilerplate..settings) : <code>object</code>
    * [~databaseSettings](#module_boilerplate..databaseSettings) : <code>object</code>
    * [~initSequelize()](#module_boilerplate..initSequelize) ⇒ <code>Sequelize</code>
    * [~startServer()](#module_boilerplate..startServer)
    * [~startShell()](#module_boilerplate..startShell)

<a name="module_boilerplate..settings"></a>

### boilerplate~settings : <code>object</code>
The settings Express.js uses to serve HTTP

**Kind**: inner constant of [<code>boilerplate</code>](#module_boilerplate)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| port | <code>number</code> | The port the server binds to |

<a name="module_boilerplate..databaseSettings"></a>

### boilerplate~databaseSettings : <code>object</code>
The connection parameters for connecting to the database.

**Kind**: inner constant of [<code>boilerplate</code>](#module_boilerplate)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| database | <code>string</code> | Overridable via PGDATABASE |
| username | <code>string</code> | Overridable via PGUSER |
| password | <code>string</code> | Overridable via PGPASSWORD |
| host | <code>string</code> | Overridable via PGHOST |

<a name="module_boilerplate..initSequelize"></a>

### boilerplate~initSequelize() ⇒ <code>Sequelize</code>
Initializes a sequelize instance

**Kind**: inner method of [<code>boilerplate</code>](#module_boilerplate)  
**Returns**: <code>Sequelize</code> - An instance of Sequelize that's ready to use.  
<a name="module_boilerplate..startServer"></a>

### boilerplate~startServer()
Starts the Express.js HTTP server.

**Kind**: inner method of [<code>boilerplate</code>](#module_boilerplate)  
<a name="module_boilerplate..startShell"></a>

### boilerplate~startShell()
Starts the Sequelize shell

**Kind**: inner method of [<code>boilerplate</code>](#module_boilerplate)  
<a name="module_models"></a>

## models
Model definitions.


* [models](#module_models)
    * [~User](#module_models..User) ⇐ <code>sequelize.Model</code>
        * [.setPassword(v)](#module_models..User+setPassword)
        * [.passwordMatches(v)](#module_models..User+passwordMatches) ⇒ <code>boolean</code>
    * [~Address](#module_models..Address) ⇐ <code>sequelize.Model</code>
        * [.getCoordinates()](#module_models..Address+getCoordinates)

<a name="module_models..User"></a>

### models~User ⇐ <code>sequelize.Model</code>
Represents a user.

**Kind**: inner class of [<code>models</code>](#module_models)  
**Extends**: <code>sequelize.Model</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| module:models~User#first_name | <code>string</code> | The user's first name |
| last_name | <code>string</code> | The user's last name |
| email | <code>string</code> | The user's email, used for logging in |
| password_hash | <code>string</code> | A hashed version of the user's password using bcrypt. Not to be set directly, use setPassword and passwordMatches(). |
| address_id | <code>int</code> | The ID of an Address record for the user. |


* [~User](#module_models..User) ⇐ <code>sequelize.Model</code>
    * [.setPassword(v)](#module_models..User+setPassword)
    * [.passwordMatches(v)](#module_models..User+passwordMatches) ⇒ <code>boolean</code>

<a name="module_models..User+setPassword"></a>

#### user.setPassword(v)
Sets a user's password.

**Kind**: instance method of [<code>User</code>](#module_models..User)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>string</code> | The user's new password. |

<a name="module_models..User+passwordMatches"></a>

#### user.passwordMatches(v) ⇒ <code>boolean</code>
Determines if a given password matches a user's password.

**Kind**: instance method of [<code>User</code>](#module_models..User)  
**Returns**: <code>boolean</code> - Whether or not the password matched.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>string</code> | The password to test |

<a name="module_models..Address"></a>

### models~Address ⇐ <code>sequelize.Model</code>
Represents an address.

**Kind**: inner class of [<code>models</code>](#module_models)  
**Extends**: <code>sequelize.Model</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| line_two | <code>string</code> |  |
| city | <code>string</code> |  |
| state | <code>string</code> | The state of the address, should be a 2-digit uppercase value like "NJ" or "PA" |
| zip_code | <code>string</code> |  |
| geocoded | <code>bool</code> | Whether or not the address has been geocoded yet |
| geocoded_lat | <code>double</code> | the latitude value from geocoding - not user set |
| geocoded_lon | <code>double</code> | the longitude value from geocoding - not user set |

<a name="module_models..Address+getCoordinates"></a>

#### address.getCoordinates()
Geocodes the address and sets [toolshed.models.Address](toolshed.models.Address) [toolshed.models.Address#geocoded_lat](toolshed.models.Address#geocoded_lat).

**Kind**: instance method of [<code>Address</code>](#module_models..Address)  
