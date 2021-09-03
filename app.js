const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + req.url + ".html", err => {
        res.sendFile(__dirname + "/404.html")
    })
})


app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port} VIA EXPRESS`);
})