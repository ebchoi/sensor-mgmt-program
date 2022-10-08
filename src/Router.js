import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './pages/components/Sidebar/Sidebar.component';
import { SensorList } from './pages/SensorList/SensorList.page';
import { GraphDashboard } from './pages/GraphDashboard/GraphDashboard.page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<SensorList />} />
          <Route path="/dashboard" element={<GraphDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
