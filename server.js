import express from 'express'
import dotenv from 'dotenv'

//custom imports
import { dbConnection } from './src/utils/db.utils.js';
import taskRouter from './src/routes/task.routes.js';
import userRouter from './src/routes/user.routes.js';


dotenv.config();

const port = process.env.NODE_ENV == "production" ? process.env.PROD_PORT : process.env.DEV_PORT;

const app = express();
dbConnection();
app.use(express.json());


app.use(`/api/v1/users`, userRouter);
app.use(`/api/v1/tasks`, taskRouter);

app.listen(port, () => {
    console.log(`server is connected on port : ${port}`)
});