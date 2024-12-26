import "./Battery.css"

function Battery({battery}){

    return(
        <div className = "battery-box">
            
            <div className = "bat-wire"></div>
            <div>
                <div className = "battery"></div>
                <center><h3 className = "volt-value">{20}V</h3></center>
            </div>
            
            <div className = "bat-wire"></div>
        </div>
    
    )

}

export default Battery