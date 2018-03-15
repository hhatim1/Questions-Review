var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
    content: { type: String, required: true, default: "", minlength: 5 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    ans1: { type: String, required: true, default: "", minlength: 2 },
    likes: { type: Number, default: 0 },
   
}, { timestamps: true });

mongoose.model("Question", QuestionSchema)