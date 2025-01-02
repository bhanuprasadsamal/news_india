import React, { useState, useEffect } from 'react';
import './NewsPaper.css';
import { Link } from 'react-router-dom';

const NewsPaper = () => {
  // State for storing links
  const [links, setLinks] = useState({
    today: '',
    yesterday: '',
    dayBefore: '',
  });

  // Load links from localStorage when the component mounts
  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('newsLinks')) || {
      today: 'https://example.com/today-newspaper.pdf',
      yesterday: 'https://example.com/yesterday-newspaper.pdf',
      dayBefore: 'https://example.com/day-before-newspaper.pdf',
    };
    setLinks(savedLinks);
  }, []);

  return (
    <div id="newspaper" className="newspaper-container">
      <h3>Latest News Paper 📰</h3>

      <div className="newspaper-cards d-flex justify-content-around flex-wrap">
        <div className="newspaper-card text-center p-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Newspaper"
            className="img-fluid rounded mb-2"
          />
          <p className="my-2">Today Newspaper</p>
          <a href={links.today} download className="btn btn-primary btn-sm">
            Download
          </a>
        </div>

        <div className="newspaper-card text-center p-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Newspaper"
            className="img-fluid rounded mb-2"
          />
          <p className="my-2">Yesterday Newspaper</p>
          <a href={links.yesterday} download className="btn btn-primary btn-sm">
            Download
          </a>
        </div>

        <div className="newspaper-card text-center p-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Newspaper"
            className="img-fluid rounded mb-2"
          />
          <p className="my-2">Day Before Yesterday Newspaper</p>
          <a href={links.dayBefore} download className="btn btn-primary btn-sm">
            Download
          </a>
        </div>
      </div>

      <div className="text-center mt-4">
        {/* Link to Admin Panel */}
        <Link to="/admin" className="btn btn-secondary">
          Go to Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default NewsPaper;
