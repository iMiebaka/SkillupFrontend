const express = require("express")
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "Data submitted" })
})

app.listen(2000, () => {
    console.log("App is running");
})