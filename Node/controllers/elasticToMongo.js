const Book = require("../models/Book");

const elasticToMongo = async (elasticData ) => {
    const sources = await Promise.all(elasticData.hits.hits.map( async (el) => {
        const book = await Book.find({id: el._source.id}, {__v:0})
        return book;
    } ))
    return sources;
}

module.exports = { elasticToMongo }