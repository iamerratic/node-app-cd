const express = require('express');
const app = express();



app.get('/home', function (req, res) {
    res.json({
        res: "Hello World"
    });

    res.end();
});



app.listen(5000);