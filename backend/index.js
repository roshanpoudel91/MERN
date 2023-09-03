import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';


const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(cors());
routes(app);



app.get('/',(req, res) => {
    res.send(`Our application is running on ${PORT}`);
})


app.listen(PORT, ()=>{
    console.log(`Your servver is running on ${PORT}`);
})