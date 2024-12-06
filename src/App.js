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
import Ressources from './pages/Ressources.js';
import Contact from './pages/Contact.js';
import Information from './pages/Information.js';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
          <ModelInstanceProvider>
          <Navbar className='' style={{zIndex: 99}} />
          <div className='h-[5.4rem]'></div>
              <Routes>
                  <Route
                    path="/"
                    element={<Accueil />}
                  />
                  <Route
                    path={APP_ROUTES.INFORMATION}
                    element={<Information />}
                  />
                  <Route
                    path={APP_ROUTES.RESSOURCES}
                    element={<Ressources />}
                  />
                  <Route
                    path={APP_ROUTES.CONTACT}
                    element={<Contact />}
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