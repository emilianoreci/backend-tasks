const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/task");
const app = express();
//const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
/* 
app.listen(port, () => {
  console.log("Escuchando en: " + port);
});
 */

//--------------

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log("Escuchando en: " + port);
});
