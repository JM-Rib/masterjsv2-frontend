import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './pages/Accueil';
import Courants from './pages/Courants';
import Navbar from './components/Navbar';

function App() {
  return (
      <div className="App">
          <Navbar className='' />
          <BrowserRouter>
            <Routes>
                <Route
                  path="/"
                  element={<Accueil />}
                />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;