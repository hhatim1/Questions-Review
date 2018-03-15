var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var AnswerSchema = new Schema({
    content: { type: String, required: true, default: "", minlength: 5 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    ans2: { type: String, required: true, default: "", minlength: 2 },
  

}, { timestamps: true });

mongoose.model("Answer", AnswerSchema)