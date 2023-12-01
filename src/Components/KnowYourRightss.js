// KnowYourRights.js
import React from 'react';
import './KnowYourRights.css'; // Import the CSS file

const KnowYourRightss = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Know Your Rights</h1>
      <div className="rights-container">
        <p className="lead">
          Understanding your legal rights is essential. Whether you are a tenant, an employee, or a consumer,
          being aware of your rights can empower you in various situations.
        </p>
        <p className="lead">
          Here are a few general tips:
        </p>
        <ul className="list-group">
          <li className="list-group-item">Know your contractual rights and obligations.</li>
          <li className="list-group-item">Understand your rights in the workplace.</li>
          <li className="list-group-item">Be aware of your rights as a consumer when making purchases.</li>
          <li className="list-group-item">Know your rights in legal situations and interactions with law enforcement.</li>
        </ul>
        <p className="lead mt-4">
          Keep in mind that legal rights can vary based on your location and the specific circumstances.
          It's always a good idea to seek legal advice if you have specific concerns or questions about your rights.
        </p>
      </div>
    </div>
  );
}

export default KnowYourRightss;
