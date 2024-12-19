import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddAnnonce from "./pages/AddAnnonce";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add-annonce" element={<AddAnnonce />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
