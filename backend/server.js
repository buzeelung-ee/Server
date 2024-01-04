// ENV
require('dotenv').config();

// DEPENDENCIDES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

const https = require('https');
const fs = require('fs');

process.on('uncaughtException', (error, origin) => {
  console.log('----- Uncaught exception -----')
  console.log(error)
  console.log('----- Exception origin -----')
  console.log(origin)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('----- Unhandled Rejection at -----')
  console.log(promise)
  console.log('----- Reason -----')
  console.log(reason)
})


// Body-parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

app.use('/api/', require('./routes/api'));

app.listen(port, () => console.log(`Server listening on port ${port}`));

// vue router
app.use(express.static(path.join(__dirname, './public')));
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, './public/index.html'));
});

const httpsOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/bzr.itsabout.today/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/bzr.itsabout.today/fullchain.pem')
}

const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(443, () => {
        console.log('HTTPS server listening on port 443');
});