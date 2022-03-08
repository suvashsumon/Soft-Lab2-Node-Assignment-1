const express = require('express');
const bodyParser = require('body-parser');
 
const leaderRouter = express.Router();
 
leaderRouter.use(bodyParser.json());
 
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Leaders page');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    res.end("Showing the leader no. "+req.params.leaderId);
})
.post((req,res,next) => {
    res.end("Saving the leader no. "+req.params.leaderId);
})
.put((req,res,next) => {
    res.end("PUT request does not work for the leader no. "+req.params.leaderId);
})
.delete((req,res,next) => {
    res.end("Deleting the leader no. "+req.params.leaderId);
});
 
module.exports = leaderRouter;