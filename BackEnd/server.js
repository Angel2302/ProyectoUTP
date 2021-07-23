const express = require('express');
const Mongoose  = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

const morgan = require('morgan');

const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route');

// Connecting mongoDB Database
Mongoose.Promise = global.Promise;
Mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected!');
}, error => {
    console.log('Could not connect to database : ' + error)
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(morgan('dev'));

// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
});

//Routers
app.use('/users', userRouter);
app.use('/products', productRouter);

// 404 Error
/* app.use((req, res, next) => {
    next(createError(404));
}); */

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status
});

