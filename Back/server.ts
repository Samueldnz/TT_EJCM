import express from 'express';
import configDotenv from './src/config/dotenv';
import cors from 'cors';
import routes from './src/routes';
// import cors from 'cors';
// import routes from './src/routes/routes';

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
//app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    