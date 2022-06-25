import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import accountRouter from "./routers/accountRouter.js";


dotenv.config();

const app = express();
let port = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


await mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  })
  .catch((error) => {
    console.log("error: ", error);
  });


app.use("/api/users", userRouter);
app.use("/api/accounts", accountRouter);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT PORT ${port}`);
});
