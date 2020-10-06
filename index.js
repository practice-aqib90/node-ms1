const express = require('express');

const app = express();

const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3001;
const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', (req, res) => {
    console.log('/ called');
    res.send({
        status: 200,
        message: 'Service is running'
    })
})

app.get('/getInfo', (req, res) => {
    console.log('getInfo called');
    res.send({
        status: 200,
        message: 'success',
        data: {
            info: "This is /getInfo GET service called on node-ms1 instance"
        }
    })
})

app.listen(PORT, ip);
console.log(`Node MS-1 Server is  running at port : ${PORT} and host : ${ip}`);
