import express from 'express';
import configDotenv from './src/config/dotenv';
import cors from 'cors';
import routes from './src/routes';
import path from "path";

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    