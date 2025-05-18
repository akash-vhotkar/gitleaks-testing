const redis = require("redis");

// Create a Redis client
const client = redis.createClient({
    socket: {
        host: "localhost", // Redis server address
        port: 6379, // Default Redis port
    },
});


// Connect to Redis
let connection = null;
client.connect().then((res) => {
    connection = res;
    console.log("the connection established");
}).catch(error => {
    console.log(error);
})

module.exports = { connection, client }