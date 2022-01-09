import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { AddressInfo } from 'net';
import config from './config'
import heathRouter from './routes/health'
import jiraRouter from './routes/jira'
const app = express();
const port = config('PORT')

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', heathRouter)
app.use('/jira', jiraRouter);

const listener = app.listen(port, () => {
   console.log(`🚀 Server listening on localhost:${(listener.address() as AddressInfo).port}`);
});