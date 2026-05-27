import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Sales = () => {
  return (
    <div className='layout'>

      <Sidebar />

      <div className='main'>

        <Navbar />

        <div className='page-box'>

          <h2>Sales Overview</h2>

          <div className='dashboard-grid'>

            <div className='dashboard-card'>
              <h2>₹4,20,000</h2>
              <p>Monthly Revenue</p>
            </div>

            <div className='dashboard-card'>
              <h2>250</h2>
              <p>Orders</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Sales;