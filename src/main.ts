import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();

//middleware

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server started on port:http://localhost:${PORT}`);
});
