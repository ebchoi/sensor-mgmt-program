import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav.component';
import { SensorList } from './pages/SensorList/SensorList.page';
import { GraphDashboard } from './pages/GraphDashboard/GraphDashboard.page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<SensorList />} />
          <Route path="/dashboard" element={<GraphDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
