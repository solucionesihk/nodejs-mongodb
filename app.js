// Full Documentation - https://docs.turbo360.co
const mongoose = require('mongoose')
//const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */



mongoose.connect('mongodb://127.0.0.1:27017/footballdb', { useNewUrlParser: true });

/*
const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://127.0.0.1:27017/footballdb";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("teams").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/

/*const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

    //To use the Turbo 360 CMS, from the terminal run
      //$ turbo extend cms
      //then uncomment line 21 below: 

  //db: vertex.nedb()
  db: {
    url: 'mongodb://localhost:27017/footballdb',
    type: 'mongo',
    onError: (err) =>{
      console.log('DB Connection failed!')
    },
    onSuccess: () =>{
      console.log('FOOTBALL DB CONNECTED!')
    }
  }
}*/

//vertex.configureApp(app, config)

// import routes
const index = require('./routes/index')
const api = require('./routes/api') // sample API Routes

app.use(express.json());

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes

module.exports = app
