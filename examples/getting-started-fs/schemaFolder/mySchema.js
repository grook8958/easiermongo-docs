//CommonJS
const { SchemaBuilder } = require('easiermongo');

module.exports = new SchemaBuilder()
    .addField(field => field.setName('myField').setType('STRING'))
    .addField(field => field.setName('mySecondField').setType('NUMBER').setDefault(0))
