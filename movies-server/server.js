const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3500;

app.use(cors());

const MovieRoute = require('./routes/movies');


mongoose.connect(process.env.MONGODB)
.then(()=> console.log("MongoDB Cloud connected"))
.catch(err => console.log(err))


app.use(MovieRoute);



app.listen(PORT, ()=> console.log("Server connected: " + PORT) );