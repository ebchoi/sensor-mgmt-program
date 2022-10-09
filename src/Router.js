import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './containers/index.containers';
import { SensorList } from './pages/SensorList.page';
import { GraphDashboard } from './pages/GraphDashboard.page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<SensorList />} />
          <Route path="/weather_info" element={<GraphDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
