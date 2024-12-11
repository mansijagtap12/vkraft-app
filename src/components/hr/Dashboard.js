import React from 'react';
import '../../styles/Dashboard.css';
import logo from '../../assets/icons/favicon _1.png'; // Replace with your logo path
import profilePic from '../../assets/profile.png'; // Replace with your profile image path

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="VKraft Logo" className="sidebar-logo" />
        <h3 className="sidebar-title">Vkraft Software Services</h3>
        <ul className="menu-list">
          <li>dashboard</li>
          <li>Leaves Balance</li>
          <li>Time Off Request</li>
          <li>Employee List</li>
          <li>Weekly Timesheet</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h2>Attendance Tracking</h2>
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="card-container">
          <div className="card card-yellow">
            <h3>Attendance Tracking</h3>
            <p>9</p>
          </div>
          <div className="card card-red">
            <h3>Pending Leave Requests</h3>
            <p>1</p>
          </div>
          <div className="card card-green">
            <h3>Timesheets Submitted</h3>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
