import { useState, useEffect } from 'react'
import axios from "axios"
import Resistor from "./Components/Resistor"
import Wire from "./Components/Wire"


import './Circuit.css'

function Circuit() {
  const [circuit, setCircuit] = useState()



  useEffect(() => {
    axios.get("http://localhost:5000/electrical")
    .then(response => {setCircuit(response.data)})
    

  

  }, [])

  if(!circuit){
    return <div className = "circuit-screen"><center><h1>Loading...</h1></center></div>
  }

  console.log(circuit)

  let cir = circuit.circuit;

  let max = 0;
  cir.forEach(element => {
    if(element.length > max){
      max = element.length
    }
  });
  
  console.log(max)
  

  function renderExtraWires(elemLength){
    let num = max - (elemLength - 1)
    const cirlist = Array.from({length : num})
    const extrawires = cirlist.map((num) => {return <Wire/>} )
    return extrawires
  }

  const displayCircuit = cir.map((row, ind) => {
    
     return(
      <div key = {ind + 1} className = "row">
        
        {row.map(element => {
        return <>
                  <div className="endwire"></div>
                  <Resistor resistance = {element} />
                  
               </>
        })}
        {row.length < max ? <div className="endwire"></div>: <Wire/>}
        
    </div>
    )
    
  })

return( 
  <div className="circuit-display">

  <center><h1 className = "circuit-heading">Circuit no 1</h1></center>
    
    <div className="circuit-contents">

      <div className="circuit-screen"> 
        <div className="startWire"></div>

        <div className="circuit">
          {displayCircuit}
        </div>

        <div className="startWire"></div>
      </div>

      <div className="circuit-info"></div>
    </div>
    <div className = "buttons"></div>
</div>
)}

export default Circuit
