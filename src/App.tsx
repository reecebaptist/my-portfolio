import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // New component
import './i18n';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
