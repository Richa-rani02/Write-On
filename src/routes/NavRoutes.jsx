import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Notes, NotFound, Auth, Archive, Trash,Label } from "../pages/index";
import { ProtectedRoutes } from "./ProtectedRoutes";
const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/label" element={
        <ProtectedRoutes>
      <Label/>
      </ProtectedRoutes>
      }/>
      <Route path="/notes" element={
        <ProtectedRoutes>
          <Notes />
        </ProtectedRoutes>
      } />
      <Route path="/signup" element={<Auth />} />
      <Route path="/trash" element={
        <ProtectedRoutes>
          <Trash />
        </ProtectedRoutes>
      } />
      <Route path="/archive" element={
        <ProtectedRoutes>
          <Archive />
        </ProtectedRoutes>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
export default NavRoutes;