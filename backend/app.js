const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const dbConnect = require("./db/dbConnect");
dbConnect();

app.use('/user', userRouter);
app.use('/', authRouter);

app.listen(process.env.PORT, () => console.log(`server is listening at port ${process.env.PORT}`))