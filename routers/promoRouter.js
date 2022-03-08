const express = require('express');
const bodyParser = require('body-parser');
 
const promoRouter = express.Router();
 
promoRouter.use(bodyParser.json());
 
promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Promotion page');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end("Showing the promotion no. "+req.params.promoId);
})
.post((req,res,next) => {
    res.end("Saving the promotion no. "+req.params.promoId);
})
.put((req,res,next) => {
    res.end("PUT request does not work for the promotion no. "+req.params.promoId);
})
.delete((req,res,next) => {
    res.end("Deleting the promotion no. "+req.params.promoId);
});
 
module.exports = promoRouter;