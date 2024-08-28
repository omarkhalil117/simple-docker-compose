const client = require('../elasticClient');
const { elasticToMongo } = require('./elasticToMongo');
const indx = 'books';

const indexSearch = async (req, res) => {
    try {
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

    const sources = await elasticToMongo(data);

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
        

        const sources = await elasticToMongo(data);


        res.json({ data: sources });
    }} catch(err) {
        res.status(400).json({ message: err.messag });
    }

}

const advancedSearch = async (req, res) => {
    try {
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


    const sources = await elasticToMongo(data);


    res.json({ data: sources })
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { indexSearch, advancedSearch }