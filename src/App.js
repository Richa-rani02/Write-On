import "./App.css";
import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";
function App() {
  return (
    <>
    <h1 className='text-3xl font-bold underline'>Hello World</h1>
    <Routes>
    <Route path="/mock" element={<Mockman />}/>
  </Routes>
  </>
  );
}

export default App;
