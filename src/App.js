import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './pages/Accueil';
import Courants from './pages/Courants';
import Navbar from './components/Navbar';
import { ModelInstanceProvider } from './provider/ModelInstanceProvider.tsx';

function App() {
  return (
      <div className="App">
          <Navbar className='' />
          <BrowserRouter>
            <ModelInstanceProvider>
              <Routes>
                  <Route
                    path="/"
                    element={<Accueil />}
                  />
              </Routes>
            </ModelInstanceProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;