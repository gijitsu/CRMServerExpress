import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT
const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD


// initialize mongodb connection
//mongodb+srv://superDatabase:<db_password>@crmdb.x2egiiv.mongodb.net/
const connectDB = async() =>
{
    try {
        await mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@crmdb.x2egiiv.mongodb.net/CrmDB`, {
            useNewUrlParser: true,
        });
        console.log('DB has been connected successfully!');
    } catch(error) {
        //handleError(error);
        console.log('Error connecting to DB');
    }
}

connectDB();

// body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serving static files
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`The server is running in port https://localhost:${PORT}`);
});