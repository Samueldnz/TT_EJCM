import express, {Application} from 'express';
import configDotenv from './src/config/dotenv';
import cors from 'cors';
import routes from './src/routes';
import path from "path";
import configAuth from './src/middlewares/checkAuth';
import passport from "passport";

configAuth();
configDotenv();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    