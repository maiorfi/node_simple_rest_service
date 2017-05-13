'use strict';

exports.get_foo_by_id = function (req, res) {

    console.info("Richiesta di %d", req.params.fooId);

    res.json({
        "fooId": parseInt(req.params.fooId)
    });
};

exports.post_foo = function (req, res) {

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

    var foo = {
        "fooId": getRandomId(1, 1000),
        "payload": req.body.payload
    };

    console.info("Creazione di...");
    console.dir(foo,{colors:true});

    res.json(foo);
};

exports.put_foo_by_id = function (req, res) {

    if (!req.params.fooId) {
        res.status(401).send("Non è stato indicato il parametro 'fooId'");
        return;
    }

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

    var foo = {
        "fooId": parseInt(req.params.fooId),
        "payload": req.body.payload
    };

    console.info("Aggiornamento di...");
    console.dir(foo,{colors:true});

    res.json(foo);
};

exports.delete_foo_by_id = function (req, res) {

    if (!req.params.fooId) {
        res.status(401).send("Non è stato indicato il parametro 'fooId'");
        return;
    }

    console.info("Eliminazione di %d", req.params.fooId);

    res.end();
};

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}