
import { Routes, Route } from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/contacts" element={<Contact />}/>
          </Routes>
    </div>
  );
}

export default App;
