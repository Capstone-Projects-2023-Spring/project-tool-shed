---
sidebar_position: 2
description: JSDoc-generated API docs
---

## Modules

<dl>
<dt><a href="#module_index">index</a></dt>
<dd><p>Server boilerplate and CLI functionality.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#models">models</a> : <code>object</code></dt>
<dd><p>Model definitions.</p>
</dd>
</dl>

<a name="module_index"></a>

## index
Server boilerplate and CLI functionality.


* [index](#module_index)
    * [~settings](#module_index..settings) : <code>HTTPServerSettings</code>
    * [~databaseSettings](#module_index..databaseSettings) : <code>DatabaseSettings</code>
    * [~initSequelize()](#module_index..initSequelize) ⇒ <code>Sequelize</code>
    * [~handleError(err, req, res, next)](#module_index..handleError)
    * [~startServer()](#module_index..startServer)
    * [~startShell()](#module_index..startShell)
    * [~HTTPServerSettings](#module_index..HTTPServerSettings) : <code>object</code>
    * [~DatabaseSettings](#module_index..DatabaseSettings) : <code>object</code>

<a name="module_index..settings"></a>

### index~settings : <code>HTTPServerSettings</code>
The settings Express.js uses to serve HTTP

**Kind**: inner constant of [<code>index</code>](#module_index)  
<a name="module_index..databaseSettings"></a>

### index~databaseSettings : <code>DatabaseSettings</code>
The settings used to connect to databases.

**Kind**: inner constant of [<code>index</code>](#module_index)  
<a name="module_index..initSequelize"></a>

### index~initSequelize() ⇒ <code>Sequelize</code>
Initializes a sequelize instance

**Kind**: inner method of [<code>index</code>](#module_index)  
**Returns**: <code>Sequelize</code> - An instance of Sequelize that's ready to use.  
<a name="module_index..handleError"></a>

### index~handleError(err, req, res, next)
A middleware that renders a fancy error page

**Kind**: inner method of [<code>index</code>](#module_index)  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | The error that occurred |
| req | <code>Request</code> | The Express.js request |
| res | <code>Response</code> | The Express.js response that's being generated |
| next | <code>function</code> | A function from Express.js that continues routing |

<a name="module_index..startServer"></a>

### index~startServer()
Starts the Express.js HTTP server.

**Kind**: inner method of [<code>index</code>](#module_index)  
<a name="module_index..startShell"></a>

### index~startShell()
Starts the Sequelize shell

**Kind**: inner method of [<code>index</code>](#module_index)  
<a name="module_index..HTTPServerSettings"></a>

### index~HTTPServerSettings : <code>object</code>
HTTP Server settings

**Kind**: inner typedef of [<code>index</code>](#module_index)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| port | <code>number</code> | The port the server binds to |

<a name="module_index..DatabaseSettings"></a>

### index~DatabaseSettings : <code>object</code>
The connection parameters for connecting to the database.

**Kind**: inner typedef of [<code>index</code>](#module_index)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| database | <code>string</code> | Overridable via PGDATABASE |
| username | <code>string</code> | Overridable via PGUSER |
| password | <code>string</code> | Overridable via PGPASSWORD |
| host | <code>string</code> | Overridable via PGHOST |

<a name="models"></a>

## models : <code>object</code>
Model definitions.

**Kind**: global namespace  

* [models](#models) : <code>object</code>
    * [.User](#models.User)
        * [.User#setPassword(v)](#models.User.User+setPassword)
        * [.User#passwordMatches(v)](#models.User.User+passwordMatches) ⇒ <code>boolean</code>
    * [.Address](#models.Address)
        * [.Address#getCoordinates()](#models.Address.Address+getCoordinates)

<a name="models.User"></a>

### models.User
Represents a user.

**Kind**: static class of [<code>models</code>](#models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| first_name | <code>string</code> | The user's first name |
| last_name | <code>string</code> | The user's last name |
| email | <code>string</code> | The user's email, used for logging in |
| password_hash | <code>string</code> | A hashed version of the user's password using bcrypt. Not to be set directly, use setPassword and passwordMatches(). |
| address_id | <code>int</code> | The ID of an Address record for the user. |


* [.User](#models.User)
    * [.User#setPassword(v)](#models.User.User+setPassword)
    * [.User#passwordMatches(v)](#models.User.User+passwordMatches) ⇒ <code>boolean</code>

<a name="models.User.User+setPassword"></a>

#### User.User#setPassword(v)
Sets a user's password.

**Kind**: static method of [<code>User</code>](#models.User)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>string</code> | The user's new password. |

<a name="models.User.User+passwordMatches"></a>

#### User.User#passwordMatches(v) ⇒ <code>boolean</code>
Determines if a given password matches a user's password.

**Kind**: static method of [<code>User</code>](#models.User)  
**Returns**: <code>boolean</code> - Whether or not the password matched.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>string</code> | The password to test |

<a name="models.Address"></a>

### models.Address
Represents an address.

**Kind**: static class of [<code>models</code>](#models)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| line_one | <code>string</code> |  |
| line_two | <code>string</code> |  |
| city | <code>string</code> |  |
| state | <code>string</code> | The state of the address, should be a 2-digit uppercase value like "NJ" or "PA" |
| zip_code | <code>string</code> |  |
| geocoded | <code>bool</code> | Whether or not the address has been geocoded yet |
| geocoded_lat | <code>double</code> | the latitude value from geocoding - not user set |
| geocoded_lon | <code>double</code> | the longitude value from geocoding - not user set |

<a name="models.Address.Address+getCoordinates"></a>

#### Address.Address#getCoordinates()
Geocodes the address and sets models.Address.geocoded_lat & models.Address.geocoded_lat.

**Kind**: static method of [<code>Address</code>](#models.Address)  
