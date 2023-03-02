import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Addnewdog from './components/Addnewdog';
import MainNavigation from './components/MainNavigation';


// import DogList from './components/DogList';
import Allprofile from './components/Allprofile';
function App() {
  //new code Added
  // const [ dogs, setDogs ] = useState([]);

  // const addNewDog = (dogData) => {
  //   setDogs((dogs) => [ ...dogs, dogData ]);
  // console.log(dogs)
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/addnewdog" element={<Addnewdog />} />
        {/* <Route path="/doglist" element={<DogList />} /> */}
        {/* <Route exact path="/" element={<DogList />} /> */}

        <Route path="/profile" element={<Allprofile />} />
      </Routes>
    </Router>
  );
}











export default App;