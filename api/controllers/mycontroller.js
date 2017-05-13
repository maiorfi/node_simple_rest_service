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
    console.dir(foo, {
        colors: true
    });

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
    console.dir(foo, {
        colors: true
    });

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

exports.get_foos = function (req, res) {

    if (!req.params.howMany) {
        res.status(401).send("Non è stato indicato il parametro 'howMany'");
        return;
    }

    var howMany=parseInt(req.params.howMany);

    if (isNaN(howMany)) {
        res.status(401).send("Il parametro 'howMany' non è un intero");
        return;
    }
    
    var arr=[];

    for (var foo of foos(howMany)) {
        arr.push(foo);
    }

    res.json(arr);
}

function* foos(howMany) {
    for (var i = 0; i < howMany; i++) {
        yield {
            "fooId": getRandomId(1,1000),
            "payload": `Questo è il foo ${i+1} di ${howMany}`
        };
    }
}

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}