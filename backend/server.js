import express from 'express';
// import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from './routes/productRoutes.js';
import seedRouter from './routes/seedRoutes.js';
import userRouter from './routes/userRoute.js';
import orderRouter from './routes/orderRoutes.js';
import path from 'path';

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.log(err.message);
    });




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../React/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../React/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
