
import { BrowserRouter, Routes, Route } from "react-router-dom";// this is  soo important , it's make  BrowserRouter, Routes, Route defiaand

import Menu from "./Menu";
import LaptopDetails from "./LaptopDetails";
import AjouterRemplacement from "./AjouterRemplacement";
import ListeBatteries from "./ListeBatteries";


function App() {
  return (
    <div className="App">
 
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/LaptopDetails" element={<LaptopDetails />} />
        <Route path="/AjouterRemplacement" element={<AjouterRemplacement />} />
        <Route path="/ListeBatteries" element={<ListeBatteries />} />
      </Routes>

    </BrowserRouter>
    </div>
  ); 
}

export default App;
