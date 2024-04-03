import express from "express";
import infoRouter from "./routers/info";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/info", infoRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}...`));
