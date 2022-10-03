import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
const app = express();

// const whitelist = ["http://127.0.0.1:5173"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS" + origin));
//     }
//   },
// };corsOptions
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(3000, (req, res) => {
  console.log("Server listening on port 3000");
});
