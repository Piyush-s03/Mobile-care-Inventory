import { Link } from 'react-router-dom'
import {
  FaHome,
  FaBox,
  FaUsers,
  FaTools,
  FaMoneyBill,
  FaChartBar,
  FaCog
} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2 className='logo'>Zyntrix IMS</h2>

      <Link to='/dashboard'><FaHome /> Dashboard</Link>
      <Link to='/inventory'><FaBox /> Inventory</Link>
      <Link to='/customers'><FaUsers /> Customers</Link>
      <Link to='/repairs'><FaTools /> Repairs</Link>
      <Link to='/sales'><FaMoneyBill /> Sales</Link>
      <Link to='/reports'><FaChartBar /> Reports</Link>
      <Link to='/settings'><FaCog /> Settings</Link>
    </div>
  )
}

export default Sidebar;