import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import About from './components/About';
import NavBar from './components/Navbar';
import { nanoid } from 'nanoid';
import Home from './components/Home';



function App() {
  const [vehicles, setVehicles] = useState(JSON.parse(localStorage.getItem('array')) ?? [])


  const handleAddvehicle = (vehicle) => {
    var today = new Date(),
      time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const newvehicle = {
      id: nanoid(),
      number: vehicle.number,
      name: vehicle.name,
      time: time
    }
    setVehicles([...vehicles, newvehicle])
  }

  const handleDeleteVehicle = (id) => {
    let newvehicles = vehicles.filter((vehicle) => vehicle.id !== id)
    setVehicles(newvehicles)
  }

  useEffect(() => {
    localStorage.setItem('array', JSON.stringify(vehicles))
  }, [vehicles])



  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home vehicles={vehicles} handleAddvehicle={handleAddvehicle} handleDeleteVehicle={handleDeleteVehicle} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
