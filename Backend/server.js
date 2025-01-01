//imports
import * as dotenv from "dotenv"

import express from "express"
import cors from "cors"
import Circuit from "./models/CircuitModel.js"
import mongoose from "mongoose"


const app = express()
dotenv.config()

//constant declaration
const DBURI = process.env.DBURI 
const PORT = parseInt(process.env.PORT);


//middlewares
app.use(cors())

app.use(express.json())

//controllers
app.get("/getcircuit", (req, res) => {
  
  Circuit.find().sort({createdAt : -1}).select("-__v -createdAt -updatedAt")
  .then(responselist => {
    let getlist = responselist
    res.json(getlist)

  })
  .catch(err => console.log(err))


})

app.get("/electrical/:id", (req, res) => {

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

app.delete("/delete/:id", (req, res) => {

  const id = req.params.id
  Circuit.findByIdAndDelete(id)
  .then( res.json({"message" : `The circuit with id ${id} has been deleted`}))
  .catch(err => {
    console.log(err)
    res.status(500).json({"message" : "An error occured while finding circuit with that id"})
  
  })

 
})


app.patch("/edit/:id", (req, res) => {

  const id = req.params.id

  console.log("code has entered edit")

  const change = req.body

  console.log(change)

  Circuit.findByIdAndUpdate(id, change)
  .then(res.json({"message" : `Circuit with id ${id}has been updated`}))
  .catch(err => {
    console.log(err)
    res.json({"message" : "An error has occured"})

  })
    
})

mongoose.connect(DBURI).then(() => {
  console.log("Connected to DB")
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  })


})


