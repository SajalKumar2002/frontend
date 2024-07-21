import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import LoginScreen from "./screens/LoginScreen";
import SourceScreen from './screens/SourceScreen';
import ConnectScreen from './screens/ConnectScreen';
import ProcessingScreen from './screens/ProcessingScreen';
import ModelScreen from './screens/ModelScreen';
import InferenceScreen from './screens/InferenceScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<LoginScreen />} />
        <Route path="/" element={<NavBar />} >
          <Route path="/" element={<Footer />} >
            <Route path="/source" element={<SourceScreen />} />
            <Route path="/connect" element={<ConnectScreen />} />
            <Route path="/model" element={<ModelScreen />} />
            <Route path="/processing" element={<ProcessingScreen />} />
          </Route>
          <Route path="/inference" element={<InferenceScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;