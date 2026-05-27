const Navbar = () => {
  return (
    <div className="navbar-custom">

      <div className="navbar-left">
        <h2>📱 Mobile Care Inventory</h2>
      </div>

      <div className="navbar-right">

        <input
          type="text"
          placeholder="Search products..."
          className="navbar-search"
        />

        <button className="notification-btn">
          🔔
        </button>

        <div className="profile-box">

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <div>
            <h5>Admin</h5>
            <p>Manager</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar;