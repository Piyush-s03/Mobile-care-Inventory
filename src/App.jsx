import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import AddProduct from './pages/AddProduct'
import Customers from './pages/Customers'
import Repairs from './pages/Repairs'
import Sales from './pages/Sales'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/repairs' element={<Repairs />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;