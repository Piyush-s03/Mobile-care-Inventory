import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Customers = () => {
  return (
    <div className='layout'>

      <Sidebar />

      <div className='main'>

        <Navbar />

        <div className='page-box'>

          <h2>Customers</h2>

          <table className='table table-dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Device</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>
                <td>9876543210</td>
                <td>iPhone 14</td>
              </tr>

              <tr>
                <td>Aman</td>
                <td>9999999999</td>
                <td>Samsung S24</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  )
}

export default Customers;