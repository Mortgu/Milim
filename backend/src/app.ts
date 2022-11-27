import express, { Express } from "express";
import {createServer} from "http";

import routes from "./routes";
import mongoose from "mongoose";

import jsonwebtoken from "jsonwebtoken";

import cors from "cors";
import {Server, Socket} from "socket.io";
import {SECRET_KEY} from "./middlewares/requireAuth";

const app: Express = express();
const httpServer = createServer(app);

const PORT: string | number = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ credentials: true }));

app.use('/', routes);

export const io = new Server(4001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.use((socket: any, next: any) => {
    const authenticationToken = socket.handshake.query.token;

    if (authenticationToken) {
        jsonwebtoken.verify(authenticationToken.toString(), SECRET_KEY, (error: any, decoded: any) => {
           if (error) return next(new Error('Authentication failed!'));

           socket.decoded = decoded;

           next();
        });
    } else {
        next(new Error('Authentication failed!'));
    }
});

export let socketIo: any = null;

io.on('connection', (socket) => {
    socketIo = socket;

    console.log(`Client (${socket.id}) connected.`);

    socket.on('disconnect', () => {
        console.log(`Client (${socket.id}) disconnected.`);
    });

    socket.on('notification:new', (args) => {
        console.log(args);
    });
});

mongoose.connect(`mongodb://localhost/milim`).then(() => {
   httpServer.listen(PORT, () => {
       console.log(`Server running on http://localhost:${PORT}`)
   });

}).catch((error) => {
    console.error(error);
})
