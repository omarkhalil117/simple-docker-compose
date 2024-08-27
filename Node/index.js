const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs')
const client = require('./redisClient');
const elasticClient = require('./elasticClient');
const Book = require('./models/Book');
const cors = require('cors');
const os = require('os');
const bookRoutes = require('./routes/bookRoutes');

app.use(cors());

client.on('connect', () => {
  console.log('Connected to redis !');
});

client.on('error', (err) => {
  console.log(`Failed to connect :( ${err}`);
});

const startConnection = async () => {
  await client.connect();
  const res = await client.ping();
  console.log(res);
};

startConnection();

elasticClient.ping()
.then(res => console.log("connected to Elastic" + res))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({extended:false}));

// define books routes
app.use('/api/books', bookRoutes);


// serve static files
app.use('/assets',express.static(__dirname + '/public'));

// test
app.get('/api', (req,res) => {
    console.log('Hello')
    res.json({ message:`Hello there from host: ${os.hostname()}` });
});

app.get('/api/dummy' , (req,res) => {
    res.json({ data: "api Data :D !!"});
});

// load static file using streams
app.get('/api/index.html' , (req,res) => {
    const file = fs.createReadStream(__dirname + "/index.html").pipe(res);
});

// test redis
app.get('/api/name', async (req,res) => {
    const name = await client.get('name')
    res.json({ message: name });
});



const url = process.env.MONGO_URL || 'mongodb://localhost:27017/';

mongoose.connect(url)
        .then(()=> console.log('Connected to DB'))
        .catch( (err) => console.log('couldn\'t connect ' , err) );

app.listen(3000, ()=> {
    console.log('Running...')
});