const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');

mongoose.connect(process.env.MONGOLAB_URI);

mongoose.connection.on('connected',()=>{
	console.log("Connected to db "+config.database);
});

mongoose.connection.on('error',(err)=>{
	console.log("Error connecting to db"+err);
});

const app = express();

const users = require('./routes/users');
const colonies = require('./routes/colonies');
const homes = require('./routes/homes');

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/colony',colonies);
app.use('/homes',homes);

app.get('/',(req,res)=>{
	res.send('Invalid Endpoint');
});

app.listen(port,()=>{
	console.log('Server started on port '+port);
});
	