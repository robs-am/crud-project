import express from "express";
import useRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", useRoutes); //para o caminhao da pasta raiz, será usado o useRoutes

app.listen(8800);