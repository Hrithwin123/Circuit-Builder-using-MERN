import * as dotenv from "dotenv"

import express from "express"
import cors from "cors"
import Circuit from "./models/CircuitModel.js"
import mongoose from "mongoose"


const app = express()
dotenv.config()


const DBURI = process.env.DBURI 
const PORT = parseInt(process.env.PORT);

app.use(cors())

app.use(express.json())

  
app.get("/getcircuit", (req, res) => {
  
  Circuit.find().sort({createdAt : -1}).select("-__v -createdAt -updatedAt")
  .then(responselist => {
    let getlist = responselist
    res.json(getlist)

  })
  .catch(err => console.log(err))


})

app.get("/electrical/:id", (req, res) => {
  console.log("code readed electrical")
  const id = req.params.id
  
  Circuit.findById(id).select("-_id -createdAt -updatedAt -__v")
  .then(response => res.json(response))

})

app.post("/create", async(req, res) => {
  const data = req.body

  const circuit = new Circuit(data)

  const savedcircuit = await circuit.save()

  console.log(`The object ${savedcircuit} has been saved`)

  res.status(200).json({message : "Circuit Recieved"})
 

})




mongoose.connect(DBURI).then(() => {
  console.log("Connected to DB")
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  })


})


