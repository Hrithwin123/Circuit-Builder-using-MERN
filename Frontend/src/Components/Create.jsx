import { useState, useEffect } from "react" 
import "./Create.css"

function Create(){

const [numrows, setNumrows] = useState(0)
const [rows, setRows] = useState([])

const [circuit, setCircuit] = useState([])
const [name, setName] = useState("Electrical Circuit") 



function row(value) {
   setCircuit(Array.from({length : parseInt(value)}).map((_,ind) => []) )
   setRows(Array.from({length : value}).map(() => 1))
   setNumrows(parseInt(value) || 0);

  
}
function addres(ind){
   let newrows = [...rows]
   newrows[ind] += 1
   setRows(newrows)
}

function delres(ind){
   let newrows = [...rows]
   newrows[ind] -= 1

   let newcircuit = [...circuit]
   
   if(newrows[ind] == 0){
      newrows.splice(ind, 1)
      setNumrows(numrows-1)
      newcircuit.splice(ind, 1)
      setCircuit(newcircuit)

   }
   else{
      newcircuit[ind].splice(newcircuit[ind].length - 1, 1)

   }
   

   setRows(newrows)
   setCircuit(newcircuit)
}

function handlechange(e, ind, i){
   let newcircuit = [...circuit] 
   newcircuit[ind][i] = parseInt(e.target.value) || 0
   setCircuit(newcircuit)

}

function handlename(v){
   setName(v)
}

let options = {
   method : "POST",
   headers : {
      "Content-Type" : "application/json"
   },
   body : JSON.stringify({
      circuitname : name,
      circuit : circuit
   })

}

function submit(){
   fetch("http://localhost:5000/create", options)
   .then(response => response.json())
   .then(data => console.log(data.message))
   .catch(err => console.log(err))
}

const displayform = Array.from({length : numrows}).map((_, ind) => (
   <div className = "rows" key = {ind}>
      {Array.from({length : parseInt(rows[ind])}).map((_, i) => (
         <input value = {circuit[ind][i] || 0} onChange = {(e) => handlechange(e, ind, i)} key = {i} className = "text-box" type = "text"></input>
      ))}
      <button onClick = {() => addres(ind)} className = "add" type = "button">Add Resistor</button>
      <button onClick = {() => delres(ind)} className = "delete" type = "button">Remove Resistor</button>
   </div>

))

let dis = false

if(numrows == 0){
   dis = true
}


return(
   <>
   <center><h1>Create Your Circuit</h1></center>
      <div className = "rows">
         <label className="label">Enter a Name for your circuit : </label>
         <input onChange = {(e) => handlename(e.target.value)} value = {name} type="text"></input>
      </div>
   <div className="container">
     
      <div className = "rows">
         <label className = "label">Enter the number of rows : </label>
         <input defaultValue={0} onChange = {(e) => row(e.target.value)} type = "text"  className = "text-box"></input>
      </div>
      <form>
         {displayform}
         <p></p>
      </form>
         <button disabled = {dis} onClick = {submit} className = "add">SUBMIT</button>
   </div>
   </>
)
}

export default Create