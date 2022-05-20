import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as variables from './noneyo.js';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());

mongoose.connect((variables.REACT_APP_URL), {
    useNewUrlParser: true, useUnifiedTypology:true
}).then(() => app.listen(variables.PORT, () => console.log(`Listening on port: ${variables.PORT}`))).catch((err)=> console.log(err.message));

// mongoose.set('useFindAndMofidy', false); // this is crashing the server for some reason