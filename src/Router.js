import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SensorList from './pages/SensorList';
import Graph from './pages/Graph';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SensorList />} />
        <Route path="/dashboard" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
