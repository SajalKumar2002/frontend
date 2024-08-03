import {
  BrowserRouter as Router,
  Route,
  Routes

} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { UserProvider } from './context/User.Context';
import ProtectedRoute from './ProtectedRoute';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import LoginScreen from "./screens/LoginScreen";
import SourceScreen from './screens/SourceScreen';
import SQLConnectScreen from './screens/SQLConnectScreen';
import CSVConnectScreen from './screens/CSVConnectScreen';
import PDFConnectScreen from './screens/PDFConnectScreen';
import ProcessingScreen from './screens/ProcessingScreen';
import ModelScreen from './screens/ModelScreen';
import InferenceScreen from './screens/InferenceScreen';

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />

          {/* <Route element={<ProtectedRoute />} > */}
            <Route element={<NavBar />} >

              <Route element={<Footer />} >

                <Route path="/data" element={<SourceScreen />} />
                <Route path="/data/sql" element={<SQLConnectScreen />} />
                <Route path="/data/csv" element={<CSVConnectScreen />} />
                <Route path="/data/pdf" element={<PDFConnectScreen />} />
                {/* <Route path="/data/clip" element={<PDFConnectScreen />} /> */}
                {/* <Route path="/data/s3" element={<PDFConnectScreen />} /> */}
                {/* <Route path="/data/owntext" element={<PDFConnectScreen />} /> */}

                <Route path="/model" element={<ModelScreen />} />
                <Route path="/processing" element={<ProcessingScreen />} />

              </Route>

              <Route path="/inference" element={<InferenceScreen />} />
            </Route>

          {/* </Route> */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;