import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';


function App() {
  
  return (
   <div className="container mt-4">
    <NavBar />
    <Outlet />
   </div> 
  );
}

export default App;
