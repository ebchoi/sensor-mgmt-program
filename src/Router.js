import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SensorList } from './pages/SensorList.page';
import GraphDashboard from './pages/GraphDashboard.page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SensorList />} />
        <Route path="/dashboard" element={<GraphDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
