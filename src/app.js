import express from "express"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import expressLayouts from "express-ejs-layouts"
import authRoutes from "./module/auth/auth.routes.js"

dotenv.config()

const app = express()

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files (css, js, images)
app.use(express.static(path.join(__dirname, "public")))

// View engine
// View engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(expressLayouts)
app.set("layout", "layout")
// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.use("/auth", authRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", { message: "Page not found" })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send("Internal Server Error")
})

export default app