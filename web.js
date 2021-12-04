import express from 'express';
import path from 'path';
import rootRouter from './routers/rootRouter.js';
import axios from 'axios';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 8001;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('views'));//경로 설청해줘야함 그래야지 url,src활용가능

app.use("/", rootRouter);

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js