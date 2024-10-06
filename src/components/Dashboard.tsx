import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text display-4">1,234</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text display-4">567</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text display-4">$12,345</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Recent Orders</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1234</td>
              <td>John Doe</td>
              <td>Product A</td>
              <td>$99.99</td>
              <td><span className="badge bg-success">Completed</span></td>
            </tr>
            <tr>
              <td>#1235</td>
              <td>Jane Smith</td>
              <td>Product B</td>
              <td>$149.99</td>
              <td><span className="badge bg-warning">Pending</span></td>
            </tr>
            <tr>
              <td>#1236</td>
              <td>Bob Johnson</td>
              <td>Product C</td>
              <td>$199.99</td>
              <td><span className="badge bg-info">Processing</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;