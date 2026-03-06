import app from "./src/app.js"
import http from "http"
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 3000
http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
