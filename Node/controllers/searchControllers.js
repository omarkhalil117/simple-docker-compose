const client = require('../elasticClient');
const Book = require('../models/Book');
const indx = 'books';

const indexSearch = async (req, res) => {

    const keys = Object.keys(req.query);

    if (keys.length > 1) {
        res.status(400).json({ message: "You should add exactly one query parameter" })
    }

    if(keys.length !== 0) {
        const field = keys[0];
        console.log(`keys ${keys} , val ${req.query[field]}`)
    
        const data = await client.search({
        index: indx,
        body: {
            query: {
                match: {
                    [field]: req.query[field]
                }

            },
            sort: [
                {
                    price: {
                        order: "desc"
                    }
                }
            ]
        }
    })

    // to-do : make generic function for this step
    const sources = await Promise.all(data.hits.hits.map( async (el) => {
        const book = await Book.find({id: el._source.id}, {__v:0})
        console.log(book)
        return book;
    } ))

    res.json({ books: sources });

    }

    if (keys.length === 0) {
        const data = await client.search({
            index:indx,
            body: {
                query: {
                match_all:{}
            }
        }
        });
        
        // to-do : make generic function for this step
        const sources = await Promise.all(data.hits.hits.map( async (el) => {
        const book = await Book.find({id: el._source.id}, {__v:0})
        console.log(book)
        return book;
        } ))

        res.json({ data: sources });
    }

}

const advancedSearch = async (req, res) => {
    const { range } = req.body
    const [lower, upper] = range.split(',');
    console.log(`lower : ${lower} , upper : ${upper}`)

    const data = await client.search({
        index: indx,
        body: {
            query: {
                range: {
                    price: {
                        gte: lower,
                        lte: upper
                    }
                }
            }
        }
    })

    // to-do : make generic function for this step
    const sources = await Promise.all(data.hits.hits.map( async (el) => {
        const book = await Book.find({id: el._source.id}, {__v:0})
        console.log(book)
        return book;
    } ))

    res.json({ data: sources })
}

module.exports = { indexSearch, advancedSearch }