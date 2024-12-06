import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './pages/Accueil';
import Courants from './pages/Courants';
import Navbar from './components/Navbar';
import { ModelInstanceProvider } from './provider/ModelInstanceProvider.tsx';
import { APP_ROUTES } from './utils/constants.js';
import PompeThermohaline from './pages/PompeThermohaline.js';
import Phytoplancton from './pages/Phytoplancton.js';
import Biodiversite from './pages/Biodiversite.js';
import Corail from './pages/Corail.js';
import Biosphere from './pages/Biosphere.js';

function App() {
  return (
      <div className="App">
          <Navbar className='' style={{zIndex: 99}} />
          <div className='h-[5.6rem]'></div>
          <BrowserRouter>
            <ModelInstanceProvider>
              <Routes>
                  <Route
                    path="/"
                    element={<Accueil />}
                  />
                  <Route
                    path={APP_ROUTES.POMPE_THERMOHALINE}
                    element={<PompeThermohaline />}
                  />
                  <Route
                    path={APP_ROUTES.PHYTOPLANCTON}
                    element={<Phytoplancton />}
                  />
                  <Route
                    path={APP_ROUTES.BIODIVERSITE}
                    element={<Biodiversite />}
                  />
                  <Route
                    path={APP_ROUTES.CORAIL}
                    element={<Corail />}
                  />
                  <Route
                    path={APP_ROUTES.BIOSPHERE}
                    element={<Biosphere />}
                  />
                  <Route
                    path={APP_ROUTES.COURANTS}
                    element={<Courants />}
                  />
              </Routes>
            </ModelInstanceProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;