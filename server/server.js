const express = require('express');
const config = require('./config/config');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


app.listen(config.PORT, () => {
    console.log('Server on Port ' + config.PORT);
    
});