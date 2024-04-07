import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateSalesOrder from './pages/createSalesOrder';
import DeleteSalesOrders from './pages/deleteSalesOrders';
import PendingOrders from './pages/pendingOrders';
import SelesOrderDetails from './pages/salesOrderDetails';
import SelesOrders from './pages/salesOrders';
import UpdatePendingSelesOrders from './pages/updatePendingSelesOrders';
import Header from './components/Header';
import Dashboard from './components/Dashboard';


export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Dashboard/>
      <Routes>
        <Route path="/" element={<CreateSalesOrder />} />
        <Route path="/delete-sales-order" element={<DeleteSalesOrders />} />
        <Route path="/pending-orders" element={<PendingOrders />} />
        <Route path="/sales-order-details" element={<SelesOrderDetails />} />
        <Route path="/sales-orders" element={<SelesOrders />} />
        <Route path="/update-pending-orders" element={<UpdatePendingSelesOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

