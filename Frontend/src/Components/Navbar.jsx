import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return(
    <nav className = "navdiv">
        <div className = "links">
            <Link className = "link" to = "/">All Circuits</Link>
            <Link className = "link" to = "/about">About this Project</Link>
            <Link className = "link" to = "/create">Create Circuit</Link>
        </div>
            <div className = "hr"></div>
    </nav>
)
}

export default Navbar