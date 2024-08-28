
const elasticToMongo = async (elasticData, model ) => {
    const sources = await Promise.all(elasticData.hits.hits.map( async (el) => {
        const book = await model.find({id: el._source.id}, {__v:0})
        return book;
    } ))
    console.log(sources)
    return sources;
}

module.exports = { elasticToMongo }