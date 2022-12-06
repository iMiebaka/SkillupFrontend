import express from "express"
const app = express()
import cors from "cors"

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Proceed to something else" })
})

app.post("/", (req, res, next) => {
    setTimeout(() =>
        res.status(200).json({ message: "Proceed to something else" })
        ,3000)
})

app.get("/response", (req, res, next) => {
    res.status(400).json({ message: "Could not proceed" })
})


app.get("/server", (req, res, next) => {
    res.status(301).json({ message: "Could not proceed" })
})

app.get("/request", (req, res, next) => {
    throw new Error("Could not proceed")
})


app.listen(2022, () => {
    console.log("App is listing at 2022");
})