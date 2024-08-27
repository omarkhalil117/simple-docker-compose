const redis = require('redis');

const redisHost = process.env.REDIS_HOST || 'redis';
const redisPort = process.env.REDIS_PORT || 6379;

// local
// const client = redis.createClient({
//   host: 'redis',
//   port: '6379',
// });

// docker
const client = redis.createClient({
  url: `redis://redis:6379`,
});


module.exports = client ;