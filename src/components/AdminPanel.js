import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import axios from 'axios'; 

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [links, setLinks] = useState({
    today: '',
    yesterday: '',
    dayBefore: '',
  });

  
  const adminCredentials = {
    username: 'admin',
    password: '12345',
  };

  
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/links') 
      .then((response) => {
        if (response.data) setLinks(response.data);
      })
      .catch((error) => console.error('Error fetching links:', error));
  }, []);

  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminCredentials.username && password === adminCredentials.password) {
      setIsAuthenticated(true);
      Swal.fire({
        icon: 'success',
        title: 'Welcome Back Admin',
        text: 'Admin Login successfully.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Username or Password!',
        text: 'Please check your credentials and try again.',
      });
    }
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSave = () => {
    axios
      .post('http://localhost:5000/api/links', links) 
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Links Updated Successfully!',
          text: 'The links have been saved to the database.',
        });
      })
      .catch((error) => {
        console.error('Error saving links:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error Saving Links!',
          text: 'There was a problem saving the links.',
        });
      });
  };

  return (
    <div className="container mt-4">
      {!isAuthenticated ? (
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h3 className="text-center">Admin Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661302846246-e8faef18255d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D"
              alt="Admin Login"
              className="img-fluid rounded"
            />
          </div>
        </div>
      ) : (
        <div>
          <h3>Admin Control Panel ⚙️</h3>
          <div className="form-group">
            <label>Today Newspaper Link</label>
            <input
              type="text"
              name="today"
              value={links.today}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Enter Today Newspaper Link"
            />
            <label>Yesterday Newspaper Link</label>
            <input
              type="text"
              name="yesterday"
              value={links.yesterday}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Enter Yesterday Newspaper Link"
            />
            <label>Day Before Yesterday Link</label>
            <input
              type="text"
              name="dayBefore"
              value={links.dayBefore}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Enter Day Before Yesterday Link"
            />
            <button onClick={handleSave} className="btn btn-success mt-3">
              Save Links
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
