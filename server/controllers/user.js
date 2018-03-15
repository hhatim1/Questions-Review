var mongoose = require('mongoose');
var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer");


module.exports = {
    loginUser: function (req, res) {
        // console.log("hi from controller")
        User.findOne({ name: req.body.name }, function (err, userFound) {
            if (userFound == null) {
                User.create({ name: req.body.name }, function (err, userCreated) {
                    req.session.user = userCreated;
                    res.json('success');
                })

            } else {
                req.session.user = userFound;
                res.json('success');
            }
        })
    },

    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/')
    },

    checkSession: function (req, res) {
        if (req.session.user) {
            return res.json(req.session.user)
        } else {
            res.json(null)
        }
    },

    new: function (req, res) {
        res.json("new poll")
    },

    addDescrip: function (req, res) {
        Question.create({ content: req.body.content, _user: req.session.user, ans1: req.body.ans1 }, function (err, descripCreated) {
            res.json(descripCreated)
         
        })
    },

    findAll: function (req, res) {
        Question.find({}).populate('_user').exec(function (err, questionsFound) {
            res.json(questionsFound)
        })
    },

    delete: function (req, res) {

        Question.findOne({ _id: req.params.id }).populate('_user').exec(function (err, questionFound) {
            if (questionFound._user.name == req.session.user.name) {
                questionFound.remove(function (err) {
             
                    res.json('deleted')
                })
            } else {
      
                res.redirect('/dashboard')
            }
        })
    },

    questionInfo: function (req, res) {
        Question.findOne({ _id: req.params.id }, function (err, questionFound) {
            res.json(questionFound)
        })
    },


    like: function (req, res) {
        Question.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } }, function (err, QuestionUpdated) {
        
            res.json(QuestionUpdated)
        })
    },
    
}