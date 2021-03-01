const app = require('express')();


app.get("/", (req, res) => {
    res.send(`<h1>Hello ${req.socket.remoteAddress}</h1>`);
})

app.listen(3000, () => {
    console.log("Server Started!");
});

// Go ahead