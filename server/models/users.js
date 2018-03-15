var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: { type: String, required: true, default: "" },
    qs_added: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    as_added: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],

})

mongoose.model("User", UserSchema)
