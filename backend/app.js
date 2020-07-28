const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')


const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/user')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use("/images", express.static(path.join("backend/images")))
mongoose.set('useCreateIndex', true)

mongoose
  .connect(
    "mongodb+srv://kimkom:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0-yyp8l.mongodb.net/node-angular?retryWrites=true&w=majority",
 {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts', postRoutes)
app.use('/api/user', userRoutes)



module.exports = app

//mongodb+srv://kimkom:yqg1xA5PcHZnG5im@cluster0-yyp8l.mongodb.net/test
