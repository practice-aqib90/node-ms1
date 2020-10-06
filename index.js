const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => console.log(`Node MS-1 Server is  running at port : ${PORT}`));