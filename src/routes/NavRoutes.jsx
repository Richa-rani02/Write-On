import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";
import {Home,Notes,Login,Signup,NotFound} from "../pages/index";
const NavRoutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mock" element={<Mockman />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    )
}
export default NavRoutes;