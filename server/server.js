const express = require('express');
const cors = require('cors');

const { petRouter } = require('./routes/pet.routes');
const app = express();
const port = 8000;

require('./config/mongoose.config');


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/pets', petRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`) );