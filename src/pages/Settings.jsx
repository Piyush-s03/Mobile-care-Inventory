import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Settings = () => {
  return (
    <div className='layout'>

      <Sidebar />

      <div className='main'>

        <Navbar />

        <div className='page-box'>

          <h2>Settings</h2>

          <button className='btn btn-danger'>Logout</button>

        </div>

      </div>

    </div>
  )
}

export default Settings;