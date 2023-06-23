import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.NODE_ENV == "production" ? process.env.PROD_PORT : process.env.DEV_PORT;

const app = express();

app.listen(port, () => {
    console.log(`server is connected on port : ${port}`)
});