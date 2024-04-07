import {BrowserRouter, Routes, Route} from 'react-router-dom'
import createSalesOrder from './pages/createSalesOrder';
import deleteSalesOrders from './pages/deleteSalesOrders';
import pendingOrders from './pages/pendingOrders';
import selesOrderDetails from './pages/salesOrderDetails';
import selesOrders from './pages/salesOrders';
import updatePendingSelesOrders from './pages/updatePendingSelesOrders';

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path ="/" element={<createSalesOrder/>}/>
      <Route path ="/delete-sales-order" element={<deleteSalesOrders />}/>
      <Route path ="/pending-orders" element={<pendingOrders />}/>
      <Route path ="/sales-order-details" element={<salesOrderDetails/>}/>
      <Route path ="/sales-orders" element={<salesOrders/>}/>
      <Route path ="/update-pending-orders" element={<updatePendingSelesOrders/>}/>
  
      </Routes></BrowserRouter>)
}
