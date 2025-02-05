const { app, json_converter } = require("./config/express");
require("dotenv").config();
const connect_DB = require("./config/connectDB");
const router = require("./router/router");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//connecting to database
connect_DB()
const corsOptions = {
  origin: 'https://graphics-card-store.vercel.app',  // Explicitly allow this origin
  credentials: true, // Allow credentials to be included in the request
};;

//middleware
app.use(cors(corsOptions));
app.use(json_converter);
app.use(cookieParser());
app.use("/api/v1", router);
//err handler
// app.use((err, req, res) => {
//   res.json({
//     message: err.message,
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`port at ${process.env.PORT}`);
});
