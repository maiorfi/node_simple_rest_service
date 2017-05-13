"use strict";

module.exports = function (app) {
    var myController = require('../controllers/mycontroller');

    app.route('/foo/:fooId')
        .get(myController.get_foo_by_id)
        .put(myController.put_foo_by_id)
        .delete(myController.delete_foo_by_id);

    app.route('/foo')
        .post(myController.post_foo);
};