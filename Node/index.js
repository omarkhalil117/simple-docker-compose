const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs')
const client = require('./redisClient');
const Book = require('./models/Book');
const cors = require('cors');
const os = require('os');

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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({extended:false}));

app.use('/assets',express.static(__dirname + '/public'));

app.get('/api', (req,res) => {
    console.log('Hello')
    res.json({ message:`Hello there from host: ${os.hostname()}` });
})

app.get('/api/index.html' , (req,res) => {
    const file = fs.createReadStream(__dirname + "/index.html").pipe(res);
})

app.get('/api/name', async (req,res) => {
    const name = await client.get('name')
    res.json({ message: name });
})

app.get('/api/books', async (req,res) => {
    const books = await Book.find({},{__v:0});
    res.json({ message: 'success' , data: books});
})

app.post('/api/books', async (req,res) => {
    try {
        console.log(req.body)
        const book = await Book.create(req.body);
        res.send({message: "added successfully"});
    } catch (err) {
        console.log(err)
        res.send(err);
    }
});

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/';

mongoose.connect(url)
        .then(()=> console.log('Connected'))
        .catch( (err) => console.log('couldn\'t connect ' , err) );
app.listen(3000, ()=> {
    console.log('Running...')
})




// console.log('helllloooo');

// for (let i = 0 ; i < 3 ; i++) {
//     setTimeout(()=> console.log(i), 1000*i);
// }

// for (var i = 0 ; i < 3 ; i++) {
//     setTimeout(()=> console.log(i), 1000*i);
//     debugger;
// }

// const EventEmitter = require('node:events')

// const event = new EventEmitter();

// event.once('hi', (name) => console.log(`hi !! ${name}`));

// event.emit('hi', 'omar')
// event.emit('hello', 'omar')

// const fs = require('fs');

// const rs = fs.createReadStream('./data.txt')

// rs.on('data' , (data) => console.log(data.toString()));

// rs.on('end' , () => console.log('Ended :)'));

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req,res) {
//     if (req.url === '/index.html') {
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }
    
//     if (req.url === '/asstes/style.css') {
//         console.log('request of css');
//         res.writeHead(200,{'Content-Type': 'text/css'});
//         fs.createReadStream(__dirname + 'assets/style.css').pipe(res);
//     }
// }).listen(3000)