const rootClassURL = "https://easiermongo.js.org/docs/v1/classes/";
const rootTypeDefURL = "https://easiermongo.js.org/docs/v1/typedefs/";

const URL = (thisArg) => {
    const nonClassOrTypedefTypes = ['method', 'property', 'event']
    if (nonClassOrTypedefTypes.includes(thisArg.type)) return `${rootClassURL}${thisArg.parent}/#${thisArg.name.replace(thisArg.parent, '')}`;
    else if (thisArg.type === 'class') return `${rootClassURL}${thisArg.name}`;
    else if (thisArg.type === 'typedef') return `${rootTypeDefURL}${thisArg.name}`;
};

const Classes = [
    {"name": "ConnectionStringBuilder", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/ConnectionStringBuilder/"},
    {"name": "Database", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/Database/"},
    {name: "DocumentBuilder", type: "class", href: "https://easiermongo.js.org/docs/v1/classes/DocumentBuilder/"},
    {name: "DocumentExpiryManager", type: "class", href: "https://easiermongo.js.org/docs/v1/classes/DocumentExpiryManager/"},
    {"name": "MongoClient", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/MongoClient/"},
    {name: "MongoDocument", type: "class", href: "https://easiermongo.js.org/docs/v1/classes/MongoDocument/"},
    {"name": "MongoError", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/MongoError/"},
    {"name": "MongoModel", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/"},
    {"name": "MongoSchema", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/MongoSchema/"},
    {"name": "Options", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/Options/"},
    {"name": "SchemaBuilder", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/SchemaBuilder/"},
    {"name": "SchemaFieldBuilder", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/SchemaFieldBuilder/"},
    {"name": "SchemaFileManager", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/SchemaFileManager/"},
    {"name": "SchemaManager", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/SchemaManager/"},
    {"name": "Utils", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/Utils/"},

];

const Typedefs = [
    {name: "BaseDocumentData", type: "typedef", get href() {return URL(this)}},
    {name: "ConnectionStringBuilderData", type: "typedef", get href() {return URL(this)}},
    {name: "ModelEditOptions", type: "typedef", get href() {return URL(this)}},
    {name: "MongoChange", type: "typedef", get href() {return URL(this)}},
    {name: "MongoClientOptions", type: "typedef", get href() {return URL(this)}},
    {name: "MongoConnectionDetails", type: "typedef", get href() {return URL(this)}},
    {name: "MongoQuery", type: "typedef", get href() {return URL(this)}},
];

const MongoModel_Methods_Properties = [
    //Properties
    {name: "MongoModel._model", parent: "MongoModel", type: "property", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {"name": "MongoModel.makeCache", "parent": "MongoModel", "type": "property", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.makeCache"},
    {"name": "MongoModel.cache", "parent": "MongoModel", "type": "property", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.cache"},
    {"name": "MongoModel.ttl", "parent": "MongoModel", "type": "property", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.ttl"},
    {"name": "MongoModel._expiryManager", "parent": "MongoModel", "type": "property", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#._expiryManager"},
    //Methods
    {"name": "MongoModel.create()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.create()"},
    {"name": "MongoModel.getAll()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.getAll()"},
    {"name": "MongoModel.get()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.get()"},
    {"name": "MongoModel.find()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.find()"},
    {"name": "MongoModel.findMany()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.findMany()"},
    {"name": "MongoModel.edit()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.edit()"},
    {"name": "MongoModel.findAndEdit()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.findAndEdit()"},
    {"name": "MongoModel.editMany()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.editMany()"},
    {"name": "MongoModel.delete()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.delete()"},
    {"name": "MongoModel.findAndDelete()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.findAndDelete()"},
    {"name": "MongoModel.deleteMany()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.deleteMany()"},
    {"name": "MongoModel.update()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.update()"},
    {"name": "MongoModel.findAndUpdate()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.findAndUpdate()"},
    {"name": "MongoModel.updateMany()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.updateMany()"},
    {"name": "MongoModel.onExpire()", "parent": "MongoModel", "type": "method", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#.onExpire()"},
];

const MongoClient_Methods_Properties_Events = [
    //Properties
    {name: "MongoClient.db", parent: "MongoClient", type: "property", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient.database", parent: "MongoClient", type: "property", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient.options", parent: "MongoClient", type: "property", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient.uri", parent: "MongoClient", type: "property", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient._mongoose", parent: "MongoClient", type: "property", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    //Methods
    {name: "MongoClient.connect()", parent: "MongoClient", type: "method", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient.disconnect()", parent: "MongoClient", type: "method", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    //Events
    {name: "MongoClient#error", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#disconnected", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#disconnecting", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#connected", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#connecting", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#reconnected", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#close", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#ready", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},
    {name: "MongoClient#file", parent: "MongoClient", type: "event", get href() { return `${rootClassURL}${this.parent}/#${this.name.replace(this.parent, '')}`}},

];

const Database_Methods_Properties = [
    //Properties
    {name: "Database.client", parent: "Database", type: "property", get href() { return URL(this)}},
    {name: "Database.name", parent: "Database", type: "property", get href() { return URL(this)}},
    {name: "Database._schemaFileManager", parent: "Database", type: "property", get href() { return URL(this)}},
    {name: "Database.schemas", parent: "Database", type: "property", get href() { return URL(this)}},
    {name: "Database.connectionDetails", parent: "Database", type: "property", get href() { return URL(this)}},
    //Methods
    {name: "Database.getCollections()", parent: "Database", type: "method", get href() { return URL(this)}},
    {name: "Database.getCollection()", parent: "Database", type: "method", get href() { return URL(this)}},
    {name: "Database.disconnect()", parent: "Database", type: "method", get href() { return URL(this)}},
];

const ConnectionStringBuilder_Methods_Properties = [
    //Properties
    {name: "ConnectionStringBuilder.host", parent: "ConnectionStringBuilder", type: "property", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.port", parent: "ConnectionStringBuilder", type: "property", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.dbName", parent: "ConnectionStringBuilder", type: "property", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.username", parent: "ConnectionStringBuilder", type: "property", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.password", parent: "ConnectionStringBuilder", type: "property", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.srv", parent: "ConnectionStringBuilder", type: "property", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.authSource", parent: "ConnectionStringBuilder", type: "property", get href() { return URL(this)}},
    //Methods
    {name: "ConnectionStringBuilder.setHost()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.setPort()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.setDbName()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.setUsername()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.setPassword()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.useSRV()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.host()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.setAuthSource()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.toString()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},
    {name: "ConnectionStringBuilder.toJSON()", parent: "ConnectionStringBuilder", type: "method", get href() { return URL(this)}},

]

export default {
    docs: [
        ...Classes,
        ...Typedefs,

        //ConnectionStringBuilder
        ...ConnectionStringBuilder_Methods_Properties,

        //Database
        ...Database_Methods_Properties,
        
        //MongoClient
        ...MongoClient_Methods_Properties_Events,

        //MongoModel
        ...MongoModel_Methods_Properties,
    ]
}