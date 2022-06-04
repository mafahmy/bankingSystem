import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();

let port = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})
app.listen(port, () => {
    console.log(`SERVER IS RUNNING AT PORT ${port}` )
})