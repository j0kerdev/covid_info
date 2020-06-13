const express = require('express');
const config = require('./config/config');
const cors = require('cors');
const app = express();
const db = require('./models/death_case');

//db.sync({ force: true });

app.use(express.json());
app.use(cors());


app.listen(config.PORT, () => {
    console.log('Server on Port ' + config.PORT);
    
});