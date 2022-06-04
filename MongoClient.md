# MongoClient 
### *extends [EventEmitter](https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter)*
## Constructor
```js
new Easiermongo.MongoClient(options)
````
| Parameter | Type                   | Description |
|-----------|------------------------|----------|
| options   | [MongoClientOptions](../MongoClientOptions.md) | The options of your client     |


---
### Properties
- [db](#.db)
- [database](#.database)
- [options](#.options)
- [uri](#.uri)
- [_mongoose](#._mongoose)

### Methods
- [connect](#.connect())
- [disconnect](#.disconnect())
---
## Properties
<a name=".db"><a/>
### [**.db**](#.db) *(Read Only)*
The database to which a connection was opened
<br>**Type:** [Database](./Database.md)<br/>

---
<a name=".database"><a/>
### [**.database**](#.database)
The database to which a connection was opened
<br>**Type:** [Database](./Database.md)<br/>

---
<a name=".options"><a/>
### [**.options**](#.options)
The options that were used to initialize this client.
<br>**Type:** [MongoClientOptions](../MongoClientOptions.md)<br/>

---
<a name=".uri"><a/>
### [**.uri**](#.uri) *(Read Only)*
The connection URI
<br>**Type:** ?[ConnectionStringBuilder](./ConnectionStringBuilder.md) | ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br/>

---
<a name="._mongoose"><a/>
### [**_mongoose**](#._mongoose)
The native mongoose connection to the database.
<br>**Type:** [Mongoose](https://mongoosejs.com/docs/api/connection.html)<br/>

## Methods
<a name=".connect()"><a/>
### [**.connect(uri)**](#.connect())
Opens a new connnection to your database.
| Parameter | Type                                      | Description                                           | Optional |
|-----------|-------------------------------------------|-------------------------------------------------------|:--------:|
| uri       | [ConnectionStringBuilder]() \| [string]() | The URI connection string to connect to your database | &#10003; |

**Returns:** [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Database](./Database.md)>

---
<a name=".disconnect()"><a>
### [**.disconnect()**](#.disconnect())
Close the connection from your database.
<br>**Returns:** [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)<br/>

