import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Repairs = () => {
  return (
    <div className='layout'>

      <Sidebar />

      <div className='main'>

        <Navbar />

        <div className='page-box'>

          <h2>Repair Tracking</h2>

          <table className='table table-dark'>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Mobile</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rohit</td>
                <td>OnePlus 12</td>
                <td>Repairing</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  )
}

export default Repairs;

