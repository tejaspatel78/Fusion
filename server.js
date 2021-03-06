const express = require('express');
const app = express();

//  Default routes
app.get('/', (req, res) => {
    res.send('Hello world - My Demo Project');
});

//  Listening Server
app.listen(3030, async () => {
    console.log(`*****************************************************************************`);
    console.log(`Server running at http://${host}`);
    console.log(`*****************************************************************************`);
});
