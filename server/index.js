import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as variables from './noneyo.js';
import contactRoutes from './routes/contact.js';
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/contacts', contactRoutes);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '../client/build')))
// }

mongoose.connect((process.env.MONGODB_URI || variables.REACT_APP_URL), {
    useNewUrlParser: true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))).catch((err)=> console.log(err.message));

// mongoose.set('useFindAndMofidy', false); // this is crashing the server for some reason