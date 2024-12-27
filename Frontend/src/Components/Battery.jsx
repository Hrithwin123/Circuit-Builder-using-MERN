import "./Battery.css"
import { useState } from "react"


function Battery({curr, eqres}){
    
    let voltage = 0
    let current = 0



    
    function handlecurrent(){
        current = parseInt(curr.slice(0, curr.length - 1))

        voltage = (current * eqres).toFixed(1)

    }

    
    function handlevoltage(){
        voltage = parseInt(curr.slice(0, curr.length - 1))

        current = (voltage / eqres).toFixed(1)

    }



    if(curr[curr.length - 1] == "A"){
        handlecurrent()
    }
    else if (curr[curr.length - 1] == "V"){
        handlevoltage()
    }




    return(
        <div className = "battery-box">
            
            <div className = "bat-wire"></div>
            <div className = "current-div">
                <div className="current">
                    <div className = "line"></div>
                </div>
                <h3 className = "curr-value">{current} A</h3>
            </div>
            
            <div className="balancer"></div>
            <div>
                <div className = "battery">
                    <div className = "bat-line"></div>
                </div>
                <center><h3 className = "volt-value">{voltage} V</h3></center>
            </div>
            <div className="balancer"></div>
            <div className="current-balancer"></div>
            <div className = "bat-wire"></div>
        </div>
    
    )

}

export default Battery