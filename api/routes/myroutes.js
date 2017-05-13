"use strict";

module.exports = function (app) {
    var myController = require('../controllers/mycontroller');

    app.route('/foo/:fooId')
        .get(myController.get_foo_by_id);

    app.route('/foo')
        .put(myController.put_foo);
};