require('dotenv').config();
require('express-async-errors');
// express

const express = require('express');
const app = express();
// rest of the packages
const morgan = require('morgan');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

// database
// const connectDB = require('./db/connect')
mongoose.set('strictQuery', false);
const connectDB = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    });
}


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");

});

//  routers 
const events = require('./routes/event')
const buses = require('./routes/bus')
const cars = require('./routes/car')
const hotels = require('./routes/hotel')
const auth = require('./routes/auth')
const user = require('./routes/user')

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        max: 60,
    })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

app.use(morgan('tiny'))
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));
app.use(fileUpload());

//app.use
app.use('/events/v1', events)
app.use('/buses/v1', buses)
app.use('/hotels/v1', hotels)
app.use('/cars/v1', cars)
app.use('/user/v1', user)
app.use('/', auth)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();