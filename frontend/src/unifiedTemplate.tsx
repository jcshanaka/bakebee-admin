import { useState } from 'react';

function UnifiedTemplate() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
             
                <div className="text-3xl font-bold text-blue-600">2,543</div>
                <div className="text-sm text-green-600 mt-2">↑ 12% from last month</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-2">Revenue</div>
                <div className="text-3xl font-bold text-green-600">$45,231</div>
                <div className="text-sm text-green-600 mt-2">↑ 8% from last month</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-2">Orders</div>
                <div className="text-3xl font-bold text-purple-600">1,234</div>
                <div className="text-sm text-red-600 mt-2">↓ 3% from last month</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-2">Products</div>
                <div className="text-3xl font-bold text-orange-600">892</div>
                <div className="text-sm text-gray-600 mt-2">No change</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">U{i}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">User {i} made a purchase</div>
                        <div className="text-sm text-gray-500">{i} hours ago</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">${(Math.random() * 500 + 50).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Users Management</h1>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">U{i}</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">User {i}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user{i}@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i % 2 === 0 ? 'Admin' : 'User'}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'products':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
            <div className="mb-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                + Add New Product
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product {i}</h3>
                    <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">${(Math.random() * 100 + 10).toFixed(2)}</span>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Orders</h1>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="divide-y">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-6 hover:bg-gray-50 transition">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-800">Order #{1000 + i}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        i % 3 === 0 ? 'bg-green-100 text-green-800' :
                        i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'Processing' : 'Pending'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Customer: John Doe {i}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">2 hours ago</div>
                      <div className="text-lg font-bold text-green-600">${(Math.random() * 200 + 50).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Sales Overview</h2>
                <div className="h-64 flex items-end justify-around space-x-2">
                  {[40, 70, 50, 80, 60, 90, 75].map((height, i) => (
                    <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-around mt-4 text-sm text-gray-600">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Traffic Sources</h2>
                <div className="space-y-4">
                  {[
                    { source: 'Direct', percentage: 45, color: 'bg-blue-500' },
                    { source: 'Social Media', percentage: 30, color: 'bg-purple-500' },
                    { source: 'Search Engines', percentage: 15, color: 'bg-green-500' },
                    { source: 'Referral', percentage: 10, color: 'bg-orange-500' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.source}</span>
                        <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Profile Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Admin User"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="admin@bakebee.com"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Save Changes
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
                <div className="space-y-3">
                  {['Email notifications', 'Push notifications', 'SMS alerts', 'Weekly reports'].map((item, i) => (
                    <label key={i} className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked={i < 2} className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        } bg-gray-900 text-white transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Logo/Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {!isSidebarCollapsed && (
            <h1 className="text-xl font-bold">BakeBee Admin</h1>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 hover:bg-gray-800 rounded-lg transition"
          >
            {isSidebarCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center px-4 py-3 transition ${
                activeMenu === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              {!isSidebarCollapsed && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="font-bold">A</span>
            </div>
            {!isSidebarCollapsed && (
              <div className="ml-3">
                <div className="text-sm font-medium">Admin</div>
                <div className="text-xs text-gray-400">admin@bakebee.com</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeMenu}</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                🔔
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                ⚙️
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default UnifiedTemplate;
