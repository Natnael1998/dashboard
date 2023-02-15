import {Routes,Route} from "react-router-dom"
import OverView from "./components/OverView";
import SideBar from "./components/SideBar";
import Tickets from "./components/Tickets";

import Login from "./pages/Login";
// import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <>
{/* <AuthContextProvider> */}
<SideBar />
    <Routes>

<Route path="/login" element={<Login />} />
      <Route path="/overview" element={<OverView />} />
<Route path="/tickets" element={<Tickets />} />

    </Routes>
{/* </AuthContextProvider> */}

    </>

  
   
  );
}

export default App;
