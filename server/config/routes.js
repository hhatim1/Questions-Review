var userController = require('./../controllers/user');
var path = require('path');

module.exports = function (app) {
    app.post('/loginUser', function (req, res) {
        userController.loginUser(req, res)
    })

    app.get('/logout', function (req, res) {
        userController.logout(req, res)
    })

    app.get('/checkSession', function (req, res) {
        userController.checkSession(req, res)
    })

    app.get('/new', function (req, res) {
        userController.new(req, res)
    })

    app.get('/answerIT', function (req, res) {
        userController.questionInfo(req, res)
    })
    app.post('/addDescrip', function (req, res) {
        userController.addDescrip(req, res)
    })

    app.post('/addAnswer', function (req, res) {
        userController.addAnswer(req, res)
    })

    app.get('/findAll', function (req, res) {
        userController.findAll(req, res)
    })

    app.delete('/delete/:id', function (req, res) {
        userController.delete(req, res)
    })

    app.get("/get/:id", function (req, res) {
        userController.questionInfo(req, res)
    })

    app.get('/like/:id', function (req, res) {
        userController.like(req, res)
    })

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}
