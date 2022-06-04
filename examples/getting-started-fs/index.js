const { MongoClient } = require('easiermongo'); //Or for ESM: import { MongoClient } from "easiermongo";

//If you're using ESM import set the 'esm' option to true
const client = new MongoClient({ uri: 'your-uri-here', useFiles: true, schemaFolder: './schemaFolder', esm: false});

client.on('ready', async () => {
    console.log(`Connected to ${client.database.name}!`);
    
    const mySchema = client.database.schemas.collection.get('your-schema-name');
    //You may also get your schema like this: const mySchema = client.database.schemas.SCHEMA_NAME_HERE;
    const result = await mySchema.get('some-id');

    console.log(result);
});
              
client.connect();