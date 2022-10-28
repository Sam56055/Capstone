const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema
const studentSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    street:{ type: String, required: true},
    zip:{ type: String, required: true},
    city:{ type: String, required: true},
    state:{ type: String, required: true}

});

//use the blueprint to create the model
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model
module.exports = mongoose.model('Student', studentSchema, 'Students');
//note capital S in the collection name