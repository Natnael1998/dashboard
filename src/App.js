import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

import Login from "./pages/Login";

function App() {

  return (
    <>

    <Routes>

<Route path="/home" element={<Home />} />
    <Route path="/" element={<Login />} />

      <Route path="/orders" element={<Orders />} />

    </Routes>


    </>

  
   
  );
}

export default App;
