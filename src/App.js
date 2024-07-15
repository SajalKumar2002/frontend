import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import LoginScreen from "./screens/LoginScreen";
import DataScreen from './screens/DataScreen';
import ProcessingScreen from './screens/ProcessingScreen';
import ModelScreen from './screens/ModelScreen';
import InferenceScreen from './screens/InferenceScreen';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
      <NavBar />
      <Routes>
        <Route path="/data" element={<DataScreen />} />
        <Route path="/model" element={<ModelScreen />} />
        <Route path="/processing" element={<ProcessingScreen />} />
        <Route path="/inference" element={<InferenceScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
