import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";
import {Home,Notes,Login,Signup,NotFound,Auth,Archive,Trash} from "../pages/index";
const NavRoutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mock" element={<Mockman />}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/signup" element={<Auth/>}/>
        <Route path="/trash" element={<Trash/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    )
}
export default NavRoutes;