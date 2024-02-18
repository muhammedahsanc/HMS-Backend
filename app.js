import express from "express";
import cors from "cors";
import { errorHandling, notFound } from "./middlewares/index.js";
import { dbConnection } from "./dbconnection/index.js";
import { admin, user ,administrater } from "./routes/index.js";
const app = express();
const port = 4000;

dbConnection();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/admin", admin);
app.use("/user", user);
app.use("/administrater",administrater );


app.use("*", notFound);
app.use(errorHandling);

app.listen(port, () => {
  console.log("Server running on", port);
});

export default app;
