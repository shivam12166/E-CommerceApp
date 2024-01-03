import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js"
import cors from 'cors';
import path from 'path';
//configure env
dotenv.config();

//database config
connectDB();
//rest object we are creating
const app = express();
//middel awareness
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api we are creating
app.use('*', function(req, res) {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    })
    //Port
const port = 8080;
//run listen
app.listen(port, () => {
    console.log(`Server Running on ${port}`.bgCyan.white)
})