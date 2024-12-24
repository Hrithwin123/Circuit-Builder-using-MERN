import express from "express"
import path from "path"
const app = express()
import cors from "cors"

const PORT = 5000;

app.use(cors())

app.use(express.json())

app.get("/electrical", (req, res) => {
  console.log("Reached here")
  res.json({"circuit" : [[1, 2, 3, 4], [10], [10, 11, 12], [20, 30]]})

})

app.post("/create", (req, res) => {
  let data = req.body
  console.log(data)

  res.status(200).json({message : "Circuit Recieved"})
 

})



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}....`)
})