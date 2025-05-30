// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // New component
import './i18n';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
