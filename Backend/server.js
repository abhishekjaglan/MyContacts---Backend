const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config()

connectDb();
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use("/api/user", require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`MyContacts working at port ${port}`)
});