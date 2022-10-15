import express, { Express } from "express";

import routes from "./routes";

import mongoose from "mongoose";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use('/', routes);

mongoose.connect(`mongodb://localhost/anifinder`).then(() => {
   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch((error) => {
    console.error(error);
})