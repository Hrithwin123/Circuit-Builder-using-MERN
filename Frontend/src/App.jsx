import { Route, Routes, BrowserRouter} from "react-router"
import Circuit from "./Circuit"
import Create from "./Components/Create"



function App(){
return(
    <BrowserRouter>
        <Routes>
            <Route path = "circuit" element = {<Circuit/>}>
            </Route>
            <Route path = "create" element = {<Create/>}>

            </Route>
        </Routes>
    </BrowserRouter>
)
}

export default App