const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client({ node: "http://elasticsearch:9200" });

module.exports = elasticClient;