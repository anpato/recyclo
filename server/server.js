const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const AuthRouter = require('./routes/AuthRouter');
const AppRouter = require('./routes/AppRouter');
const MaterialRoute = require('./routes/MaterialRoute');
const LocationRoute = require('./routes/LocationRoute');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/app', AppRouter);
app.use('/auth', AuthRouter);
app.use(passport.initialize());

app.get('/', async(req,res) =>  {
    try {
        res.send({msg:'hello'})    
    } catch (error) {
        throw error
    }
});

app.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/'); 
})

app.use( '/',(err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ message: err.message });
});

app.use('/content', MaterialRoute);
app.use('/content', LocationRoute);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});