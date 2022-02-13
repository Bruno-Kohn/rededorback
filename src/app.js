import express from 'express';
import cors from 'cors';
import { searchCep } from './controllers/searchCep.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/search', searchCep);

export default app;
