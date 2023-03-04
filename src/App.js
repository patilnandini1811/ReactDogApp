import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Addnewdog from './components/Addnewdog';
import MainNavigation from './components/MainNavigation';
import Allprofile from './components/Allprofile';
import EditDog from './components/EditDog';
function App() {

  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/addnewdog" element={<Addnewdog />} />
        <Route path="/dog/:id" element={<Allprofile />} />
        <Route path="/editdog/:id" element={<EditDog />} />
      </Routes>
    </Router>
  );
}
export default App;