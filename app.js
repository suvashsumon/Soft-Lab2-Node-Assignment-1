const express = require('express');
const dishRouter = require('./routers/dishRouter');
const promoRouter = require('./routers/promoRouter');
const leaderRouter = require('./routers/leaderRouter');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Application's Home Page</h1><br><br><b>Submitted By :</b><br>Name : Suvash Kumar<br>Roll: 1910476124");
});
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log("Server is running.....");
});