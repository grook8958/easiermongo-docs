const { MongoClient, SchemaBuilder } = require('easiermongo');
const client = new MongoClient({ uri: 'your-uri-here' });

client.on('ready', async () => {
    console.log(`Connected to ${client.database.name}!`);

    //Create your new schema manually
    const myNewSchema = new SchemaBuilder()
        .addField(field => field.setName('myField').setType('STRING'))
        .addField(field => field.setName('mySecondField').setType('NUMBER').setDefault(0))
    //Register your schema
    client.database.schemas.addSchema('myNewSchemaName', myNewSchema);

    const mySchema = client.database.schemas.collection.get('your-schema-name').model;
    //You may also get your schema like this: const mySchema = client.database.schemas.SCHEMA_NAME_HERE;
    const result = await mySchema.get('some-id');
     
    console.log(result);
});
//Connect to your database.
client.connect();