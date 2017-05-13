"use strict";

module.exports = function (app) {
    var myController = require('../controllers/mycontroller');

    // todoList Routes
    app.route('/foo/:fooId')
        .get(myController.get_foo_by_id);
};