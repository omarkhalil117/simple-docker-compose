const express = require('express');
const app = express();
const cors = require('cors');
const os = require('os');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const client = require('./redisClient');
const elasticClient = require('./elasticClient');
const bookRoutes = require('./routes/bookRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use(cors());

client.on('connect', () => {
  console.log('Connected to redis !');
});

client.on('error', (err) => {
  console.log(`Failed to connect :( ${err}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({extended:false}));


// define books routes
app.use('/api/books', bookRoutes);

// deinfe search routes
app.use('/api/search',searchRoutes);

// test
app.get('/api', (req,res) => {
    console.log('Hello')
    res.json({ message:`Hello there from host: ${os.hostname()}` });
});

// try async thunk
app.get('/api/dummy' , (req,res) => {
    res.json({ data: "api Data :D !!"});
});

// test redis
app.get('/api/name', async (req,res) => {
    const name = await client.get('name')
    res.json({ message: name });
});

// connect to redis
const startConnection = async () => {
  await client.connect();
  const res = await client.ping();
  console.log(res);
};

// start redis connection
startConnection();

// connect to elastic search
elasticClient.ping()
.then(res => console.log("connected to Elastic" + res))
.catch(err => console.log(err));


const url = process.env.MONGO_URL || 'mongodb://localhost:27017/';

mongoose.connect(url)
        .then(()=> console.log('Connected to DB'))
        .catch( (err) => console.log('couldn\'t connect ' , err) );

app.listen(3000, ()=> {
    console.log('Running...')
});