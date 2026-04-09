import express from "express";
import schoolRoute from "./src/route/school.routes.js";

const app = express();
app.use(express.json());




app.use("/api/v1",schoolRoute);
// app.get("/", (req, res) => {
//   console.log("Root route hit ");
//   res.send("Server working");
// });

export { app };