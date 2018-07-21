import express from 'express';
import { News } from './models';

const app = express();

app.use('/', (req, res) => News
        .find({}, {title: 1}, (err, news) => {
            if (err) {
                res.json(err);
            }
            res.json(news);

        }));

export default app;
