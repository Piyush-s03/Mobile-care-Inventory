  import Sidebar from '../components/Sidebar';
  import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className='layout'>

      <Sidebar />

      <div className='main'>

        <Navbar />

        <div className='dashboard-grid'>

          <div className='dashboard-card'>
            <h2>250</h2>
            <p>Total Products</p>
          </div>

          <div className='dashboard-card'>
            <h2>₹1,50,000</h2>
            <p>Total Sales</p>
          </div>

          <div className='dashboard-card'>
            <h2>15</h2>
            <p>Low Stock</p>
          </div>

          <div className='dashboard-card'>
            <h2>540</h2>
            <p>Customers</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard;