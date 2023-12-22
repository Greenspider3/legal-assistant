// LegalConsultations.js

import React from 'react';
import './LegalConsultations.css';
import { Link } from 'react-router-dom';

const lawyersData = [
  {
    name: 'John Doe',
    specialization: 'Family Law',
    experience: '10 years',
    contact: 'john.doe@example.com',
    image: 'https://www.collinsdictionary.com/images/thumb/lawyer_174092276_250.jpg?version=5.0.35', // Placeholder image URL
    bioLink: '/lawyer/john-doe', // Placeholder link to lawyer's detailed biography
  },
  {
    name: 'Jane Smith',
    specialization: 'Corporate Law',
    experience: '8 years',
    contact: 'jane.smith@example.com',
    image: 'https://www.collinsdictionary.com/images/thumb/lawyer_174092276_250.jpg?version=5.0.35', // Placeholder image URL
    bioLink: '/lawyer/jane-smith', // Placeholder link to lawyer's detailed biography
  },
  {
    name: 'Robert Johnson',
    specialization: 'Criminal Law',
    experience: '12 years',
    contact: 'robert.johnson@example.com',
    image: 'https://www.collinsdictionary.com/images/thumb/lawyer_174092276_250.jpg?version=5.0.35', // Placeholder image URL
    bioLink: '/lawyer/robert-johnson', // Placeholder link to lawyer's detailed biography
  },
  // Add more lawyers as needed
];

const LegalConsultations = () => {
  return (
    <div className="legal-consultations">
      <h1 className="legal-title">Legal Consultations</h1>
      <div className="lawyers-container">
        {lawyersData.map((lawyer, index) => (
          <div className="lawyer-card" key={index}>
            <img src={lawyer.image} alt={lawyer.name} />
            <h2>{lawyer.name}</h2>
            <p><strong>Specialization:</strong> {lawyer.specialization}</p>
            <p><strong>Experience:</strong> {lawyer.experience}</p>
            <p><strong>Contact:</strong> {lawyer.contact}</p>
            <Link to={lawyer.bioLink}><button className="know-more-button">Know More</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalConsultations;
