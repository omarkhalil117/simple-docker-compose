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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({extended:false}));

// serve static files
app.use('/assets',express.static(__dirname + '/public'));

// test
app.get('/api', (req,res) => {
    console.log('Hello')
    res.json({ message:`Hello there from host: ${os.hostname()}` });
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

// get all books
app.get('/api/books', async (req,res) => {
    const books = await Book.find({},{__v:0});
    res.json({ message: 'success' , data: books});
});


// create book
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

// get one book
app.get('/api/books/:id', async(req,res) => {
    try {
        const { id } = req.params;
        const book = await Book.findOne({ _id: id });
        res.json({ message: "success" , book });
    } catch(err) {
        res.status(404).send(err);
    }
})

// update book
app.patch('/api/books/:id', async (req,res) => {
    try {
        const id = req.params.id ;
        console.log('Update body : ',req.body)
        const book = await Book.findOneAndUpdate({_id: id} , req.body , { new:true},);
        res.json({ message: "Updated Successfully" , book });
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

// delete book
app.delete('/api/books/:id', async (req,res) => {
    try {
        const id = req.params.id ;
        await Book.deleteOne({_id: id})
        res.json({ message: "Deleted Successfully" });
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/';

mongoose.connect(url)
        .then(()=> console.log('Connected'))
        .catch( (err) => console.log('couldn\'t connect ' , err) );
app.listen(3000, ()=> {
    console.log('Running...')
});