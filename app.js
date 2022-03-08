const express = require('express');
const dishRouter = require('./routers/dishRouter');
const promoRouter = require('./routers/promoRouter');
const leaderRouter = require('./routers/leaderRouter');

const app = express();
const PORT = 3000;

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log("Server is running.....");
});