import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from './components/Tuiter/ExploreScreen/ExploreScreen';
import HomeScreen from './components/Tuiter/HomeScreen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" exact={true} element={<Tuiter />} />
          <Route path="/tuiter/home" exact={true} element={<HomeScreen />} />
          <Route path="/tuiter/explore" exact={true} element={<ExploreScreen />} />


        </Routes>

      </div>
    </BrowserRouter>
  );
}


export default App;