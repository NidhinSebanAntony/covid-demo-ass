import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import CountrySpecificData from './pages/CountrySpecificData';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country-specific-data" element={<CountrySpecificData />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
