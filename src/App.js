import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailScreen from './components/Details';

const App = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:country" element={<DetailScreen />} />
    </Routes>
  </main>
);
export default App;
