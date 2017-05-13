'use strict';

exports.get_foo_by_id = function (req, res) {
    res.json({
        "fooId": req.params.fooId
    });
};