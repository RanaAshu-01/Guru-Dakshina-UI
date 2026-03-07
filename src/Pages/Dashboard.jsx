import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {

  const [total, setTotal] = useState(4)
  const [pending, setPending] = useState(0)
  const [forward, setForward] = useState(0)

  const [activeTab, setActiveTab] = useState("dashboard");

  const applications = [
    {
      id: "#125845248",
      name: "Suntujit Borah",
      phone: "+91 9854098540",
      time: "26/02/2026 : 11:30",
    },
    {
      id: "#125845249",
      name: "Abhijit Gogoi",
      phone: "+91 9854098541",
      time: "26/02/2026 : 8:30",
    },
    {
      id: "#125845250",
      name: "Binu Hazarika",
      phone: "+91 9854098558",
      time: "26/02/2026 : 14:30",
    },

  ];

  useEffect(() => {
    setTotal(applications.length)
  }, [])



  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100">

      <div className="p-6">

        {/* Tabs */}
        <div className="flex border-b mb-6">

          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-6 py-2 font-medium ${activeTab === "dashboard"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-500"
              }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab("applications")}
            className={`px-6 py-2 font-medium ${activeTab === "applications"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-500"
              }`}
          >
            All Applications
          </button>

        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <>
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

              <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
                <p>Total Applications</p>
                <h2 className="text-3xl font-bold">{total}</h2>
              </div>

              <div className="bg-orange-500 text-white p-6 rounded-lg text-center">
                <p>Pending Applications</p>
                <h2 className="text-3xl font-bold">{pending}</h2>
              </div>

              <div className="bg-green-500 text-white p-6 rounded-lg text-center">
                <p>Forwarded Applications</p>
                <h2 className="text-3xl font-bold">{forward}</h2>
              </div>

            </div>

            {/* Table */}
            {/* Desktop Table */}
            <div className="hidden md:block bg-white shadow rounded-lg p-4 overflow-x-auto">

              <table className="w-full text-center">

                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3">Sl No</th>
                    <th>Application ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Submitted Time</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index} className="border-b">

                      <td className="p-3">{index + 1}</td>
                      <td>{app.id}</td>
                      <td>{app.name}</td>
                      <td>{app.phone}</td>
                      <td>{app.time}</td>

                      <td className="space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">
                          View
                        </button>

                        <button className="bg-green-500 text-white px-3 py-1 rounded">
                          Forward
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>


            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">

              {applications.map((app, index) => (

                <div key={index} className="bg-white p-4 rounded-lg shadow">

                  <div className="flex justify-between mb-2">
                    <p className="font-semibold">{app.name}</p>
                    <span className="text-sm text-gray-500">{app.id}</span>
                  </div>

                  <p className="text-sm text-gray-600">
                    📞 {app.phone}
                  </p>

                  <p className="text-sm text-gray-600">
                    🕒 {app.time}
                  </p>

                  <div className="flex gap-3 mt-3">

                    <button className="flex-1 bg-blue-500 text-white py-1 rounded">
                      View
                    </button>

                    <button className="flex-1 bg-green-500 text-white py-1 rounded">
                      Forward
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className="text-center text-gray-500 text-lg">
            Sorry for the inconvenience. This section is under construction.
          </div>
        )}

      </div>

    </div>
    </>
  );
};

export default Dashboard;
