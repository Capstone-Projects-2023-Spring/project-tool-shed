---
sidebar_position: 2
description: JSDoc-generated API docs
---

## Objects

<dl>
<dt><a href="#models">models</a> : <code>object</code></dt>
<dd><p>Model definitions.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#settings">settings</a> : <code><a href="#HTTPServerSettings">HTTPServerSettings</a></code></dt>
<dd><p>The settings Express.js uses to serve HTTP</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#initSequelize">initSequelize()</a> ⇒ <code>Sequelize</code></dt>
<dd><p>Initializes a sequelize instance</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#HTTPServerSettings">HTTPServerSettings</a> : <code>Object</code></dt>
<dd><p>HTTP Server settings</p>
</dd>
</dl>

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
| state | <code>string</code> |  |
| zip_code | <code>string</code> |  |
| geocoded | <code>bool</code> | Whether or not the address has been geocoded yet |
| geocoded_lat | <code>double</code> | the latitude value from geocoding - not user set |
| geocoded_lon | <code>double</code> | the longitude value from geocoding - not user set |

<a name="models.Address.Address+getCoordinates"></a>

#### Address.Address#getCoordinates()
Geocodes the address and sets models.Address.geocoded_lat & models.Address.geocoded_lat.

**Kind**: static method of [<code>Address</code>](#models.Address)  
<a name="settings"></a>

## settings : [<code>HTTPServerSettings</code>](#HTTPServerSettings)
The settings Express.js uses to serve HTTP

**Kind**: global constant  
<a name="initSequelize"></a>

## initSequelize() ⇒ <code>Sequelize</code>
Initializes a sequelize instance

**Kind**: global function  
**Returns**: <code>Sequelize</code> - An instance of Sequelize that's ready to use.  
<a name="HTTPServerSettings"></a>

## HTTPServerSettings : <code>Object</code>
HTTP Server settings

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| port | <code>number</code> | The port the server binds to |

