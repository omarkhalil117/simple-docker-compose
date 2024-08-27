const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client({
  node: "http://elasticsearch:9200",
});

// elasticClient
//   .ping()
//   .then(() => console.log("You are connected to Elasticsearch!"))
//   .catch(() => console.log("Elasticsearch is not connected."));

module.exports = elasticClient;