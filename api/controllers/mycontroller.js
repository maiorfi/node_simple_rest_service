'use strict';

exports.get_foo_by_id = function (req, res) {
    res.json({
        "fooId": req.params.fooId
    });
};

exports.put_foo = function (req, res) {

    if (!req.body.payload) {
        res.status(401).send("L'oggetto passato non ha la proprietà payload");
        return;
    }

    if (!req.body.payload.stringa) {
        res.status(401).send("L'oggetto passato non ha la proprietà payload.stringa");
        return;
    }

     if (typeof req.body.payload.stringa !== "string") {
        res.status(401).send("La proprietà 'payload.stringa' non è di tipo stringa");
        return;
    }

    var foo={
        "fooId": getRandomId(1, 1000),
        "payload": req.body.payload
    };

    console.info(foo);

    res.json(foo);
};

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}