const Classes = [
    {"name": "ConnectionStringBuilder", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/ConnectionStringBuilder/"},
    {"name": "Database", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/Database/"},
    {"name": "MongoClient", "type": "class", "href": "https://easiermongo.js.org/docs/v1/classes/MongoClient/"},
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
    {"name": "MongoClientOptions", "type": "typedef", "href": "https://easiermongo.js.org/docs/v1/typedefs/MongoClientOptions/"},

]

const MongoModel_Func_Properties = [
    //Properties
    {"name": "MongoModel._model", "parent": "MongoModel", "type": "property", "href": "https://easiermongo.js.org/docs/v1/classes/MongoModel/#._model"},
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

export default {
    docs: [
        ...Classes,
        ...Typedefs,
        ...MongoModel_Func_Properties,
    ]
}