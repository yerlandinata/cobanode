import http from 'http';
import mongoose from 'mongoose';
import app from './app';

const logs = (text: string) => {
    const a = '';
    console.log(text + a);
};

logs(process.env.WOW);
const DB_URI = process.env.DB_URI;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(DB_URI
, {useNewUrlParser: true})
    .then(() => console.log('db connected!'))
    .catch((err) => {
        console.log('db error', err);
        console.log(JSON.stringify(err));
        process.exit();
    });

const server = http.createServer(app);
server.listen(4000);
console.log('Listening on port 4000');
console.log('http://localhost:4000');

export default server;
