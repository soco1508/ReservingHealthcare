require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//config ViewEngine
configViewEngine(app);

//khai báo route
initWebRouter(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
