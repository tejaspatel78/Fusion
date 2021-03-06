const express = require('express');
const app = express();

//  Default routes
app.get('/', (req, res) => {
    res.send('Hello world - My Demo Project');
});

//  Listening Server
app.listen(80, async () => {
    console.log(`*****************************************************************************`);
    console.log(`Server running`);
    console.log(`*****************************************************************************`);
});
