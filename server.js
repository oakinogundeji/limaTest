'use strict';
if(process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
/**
 * Module Dependencies
 */
const
    Http = require('http'),
    Mongoose = require('mongoose'),
    cluster = require('cluster'),    
    App = require('./app');
/**
 * Module variables
 */
const 
  {dBURL} = process.env,
  totalCPUs = require("os").cpus().length;

/**
 * Create Server Instance, pass App as the Listener
 */
const Server = Http.createServer(App);

/**
 * Config Mongoose
 */
Mongoose.set('strictQuery', true);

/**
 * Connect to MongoDB Database and initiate Server on connection success
 */

async function main() {    
  console.log(`Worker ${process.pid} started`);
    try {
      await Mongoose.connect(dBURL);
      console.log('Successfully connected to ' + dBURL);
      return Server.listen(3030, () => console.log('server UP'));
    }
    catch (err) {
      console.error('There was a db connection error');
      console.error(err.message);
      return process.exit(1);
    }
}

if(cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);
 
  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
 
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died, forking another worker.....`);
    cluster.fork();
  });
}
else {
  main();
}


process.on('SIGINT', function () {
    Mongoose.connection.close(function () {
        console.error('dBase connection closed due to app termination');
        return process.exit(0);
    });
});