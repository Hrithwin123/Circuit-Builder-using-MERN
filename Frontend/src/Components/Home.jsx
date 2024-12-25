import { useEffect, useState } from "react"
import "./Home.css"

import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"


function Home(){

    const [circuitinfo, setcircuitinfo] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5000/getcircuit")
        .then(response => response.json())
        .then(data => setcircuitinfo(data))
        .catch(err => console.log(err))

        

    }, [])

    async function handleclick(id){
        navigate(`/circuit/${id}`)

    }


    const displaycircuits = circuitinfo.map((elem, ind) => (
        <div key = {ind} onClick = {() => handleclick(elem._id)} className = "singlecircuit">
            <div className = "stylebox"></div>
            <h1 className = "circuitname">{elem.circuitname}</h1>
        </div>
    )) || null
    

    return(<>
        <center><h1 className = "home-head">Circuit Builder</h1></center>
        <Navbar/>
        {displaycircuits.length != 0 ?<h1 className = "all" >All Circuits</h1> : null}
        {displaycircuits.length == 0 ? "Loading" : displaycircuits}
    </>)


}

export default Home