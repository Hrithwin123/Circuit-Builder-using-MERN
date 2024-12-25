import { Route, Routes, BrowserRouter} from "react-router-dom"
import Circuit from "./Circuit.jsx"
import Create from "./Components/Create.jsx"
import Home from "./Components/Home.jsx"
import { useState } from "react"





function App(){

    const [id, setid] = useState("")


return(
    <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}></Route>
            <Route path = "circuit/:id" element = {<Circuit/>}></Route>
            <Route path = "create" element = {<Create/>}></Route>
        </Routes>
    </BrowserRouter>
)
}

export default App