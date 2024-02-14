import "./App.css";
import Login from "./pages/Login";

import Products from "./pages/Products";

import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      < Routes>
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/" element={<Login/>} />
      </ Routes>
    </Router>
  );
}

export default App;
