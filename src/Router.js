import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SensorList } from './pages/SensorList.page';
import GraphDashboard from './pages/GraphDashboard.page';
import { NavView } from './components/Nav/NavView';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavView />}>
          <Route path="/" element={<SensorList />} />
          <Route path="/dashboard" element={<GraphDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
