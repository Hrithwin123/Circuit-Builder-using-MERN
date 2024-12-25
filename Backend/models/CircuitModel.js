import Mongoose from "mongoose"

const Schema = Mongoose.Schema


const CircuitSchema = new Schema({

    circuitname : {type : String, required : true},
    circuit : {type : [Schema.Types.Mixed], required : true}

}, {timestamps : true}) 


const Circuit = Mongoose.model("Circuit", CircuitSchema)

export default Circuit