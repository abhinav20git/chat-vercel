
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { app, server } from "./SocketIO/server.js";
import path from "path";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";

dotenv.config(); 
const URI=process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
const PORT=process.env.PORT || 5001;


try{
    mongoose.connect(URI);
    console.log("db connected");
}catch(err){
    console.log("error")
}

app.use("/api/user",userRoute);
app.use("/api/message", messageRoute );




if (process.env.NODE_ENV === 'production') {
    const dirPath =  path.resolve();
    app.use(express.static("./client/dist"));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirPath, './client/dist','index.html'));
    });
}

server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});

