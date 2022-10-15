import express, { Express } from "express";

import routes from "./routes";

import mongoose from "mongoose";
import cors from "cors"

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ credentials: true }));

app.use('/', routes);

mongoose.connect(`mongodb://localhost/milim`).then(() => {
   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch((error) => {
    console.error(error);
})