import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Repairs = () => {

  const [repairs, setRepairs] = useState([
    {
      id: 1,
      customer: "Rahul Sharma",
      mobile: "iPhone 14 Pro",
      issue: "Display Replacement",
      amount: 12000,
      status: "Completed",
    },

    {
      id: 2,
      customer: "Aman Verma",
      mobile: "Samsung S24",
      issue: "Battery Issue",
      amount: 3500,
      status: "Pending",
    },

    {
      id: 3,
      customer: "Rohit Patel",
      mobile: "OnePlus 12",
      issue: "Charging Problem",
      amount: 2500,
      status: "Repairing",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredRepairs = repairs.filter((item) =>
    item.customer.toLowerCase().includes(search.toLowerCase())
  );

  const deleteRepair = (id) => {
    const updatedData = repairs.filter(
      (item) => item.id !== id
    );

    setRepairs(updatedData);
  };

  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar />

      <div className="main">

        {/* Navbar */}
        <Navbar />

        <div className="page-box">

          <div className="repair-header">

            <h2>Repair Management</h2>

            <input
              type="text"
              placeholder="Search Customer..."
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="table-responsive">

            <table className="table table-dark table-hover">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Mobile</th>
                  <th>Issue</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {
                  filteredRepairs.map((item) => (
                    <tr key={item.id}>

                      <td>{item.id}</td>

                      <td>{item.customer}</td>

                      <td>{item.mobile}</td>

                      <td>{item.issue}</td>

                      <td>₹{item.amount}</td>

                      <td>

                        <span
                          className={
                            item.status === "Completed"
                              ? "status-completed"
                              : item.status === "Pending"
                              ? "status-pending"
                              : "status-repairing"
                          }
                        >
                          {item.status}
                        </span>

                      </td>

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteRepair(item.id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Repairs;