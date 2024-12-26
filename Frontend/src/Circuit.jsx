import { useState, useEffect } from 'react'
import axios from "axios"
import Resistor from "./Components/Resistor"
import Wire from "./Components/Wire"
import Navbar from './Components/Navbar'
import Battery from './Components/Battery'


import { useParams } from "react-router-dom"

import './Circuit.css'

function Circuit() {

  const [circuit, setCircuit] = useState()

  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/electrical/${id}`)
    .then(response => {setCircuit(response.data)})
    .catch(err => console.log(err))
    

  

  }, [])



  if(!circuit){
    return <div className = "circuit-screen"><center><h1>Loading...</h1></center></div>
  }


  let cir = circuit.circuit;

  let max = 0;
  cir.forEach(element => {
    if(element.length > max){
      max = element.length
    }
  });
  
  console.log(max)
  
  function editcir(){
    window.location.href = `/edit/${id}`
  }
  
  function deletecir(){
    window.location.href = `/delete/${id}`

  }

  function eqres(){
    let sumlist = [];
    let sum = 0
    let mul = 1;
    cir.map((row) => {
      row.forEach((res) => {
        sum += res
      })
      sumlist.push(sum)
      sum = 0
    })

    sumlist.forEach((res) => {
      sum += res
      mul *= res
    })

    

    return (mul/sum).toFixed(2)
    
  }

  const displayCircuit = cir.map((row, ind) => {
    
     return(
      <div key = {ind} className = "row">
        
        {row.map((element, i) => {
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

  <center><h1 className = "circuit-heading">{circuit.circuitname || "Loading"}</h1></center>
    <Navbar/>
    <div className="circuit-contents">

      <div className="circuit-screen"> 
        <div className="startWire"></div>

        <div className="circuit">
          {displayCircuit}


        </div>
        <div className="startWire"></div>
      </div>

      <div className = "edit-delete">
          <button className = "edit" onClick = {() => editcir()}>Edit Circuit</button>
          <button className = "delete-circuit" onClick = {() => deletecir()}>Delete Circuit</button>
      </div>
     
    </div>
    <div className = "circuit-info">
      <div className = "eqres">
        <h1 className = "eqres-head">Equivalence Resistance : </h1>
        <h1 className = "eqres-value">{eqres()} &#8486;</h1>
      </div>
    </div>
</div>
)}

export default Circuit
