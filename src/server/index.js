// Load our .env file
require('dotenv').config();

// Import express and cors
const express = require('express');
const cors = require('cors');

// Set up express
const app = express();
app.disable('x-powered-by');
app.use(cors());
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));




const collectionsRouter = require('./routers/collections');
app.use('/collections', collectionsRouter);

const artworkRouter = require('./routers/artwork');
app.use('/artwork', artworkRouter);

const loginRouter = require('./controllers/auth');
app.use('/login', loginRouter);

const adminRouter = require('./controllers/auth');
app.use('/admin', adminRouter);

// Set up a default "catch all" route to use when someone visits a route
// that we haven't built
app.get('*', (req, res) => {
    res.json({ ok: true });
});

// Start our API server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`);
});