import React from 'react';
import { Link } from 'react-router-dom';

const LegalFormatsList = () => {
  const legalFormats = {
    A: [
      'Agreement Between Contractor And Principal Employer',
      'Agreement Development For Hotel Plot',
      'Agreement For Family Settlement',
      'Agreement for Property',
      'Agreements For Temporary Employment',
      'Agreement To Sale Format Free Download',
      'Agreement To Use Trade Mark',
      'Anticipatory Bail Format India',
      'Appointment Letter to A Daily Wage Employee',
    ],
    B: [
      'Bail Format India',
      'Bank Guarantee',
      'Builders Agreement Suggested Format',
      'Business Agreement Format',
      'Business Agreement Format India',
      'Business Agreement Format For Retail Showroom',
      'Business Development Agreement',
    ],
    C: [
      'Consumer Court Complaint Format',
      'Consumer Notice',
      'FIR quashing compromise deed',
    ],
    D: [
       'Draft for society NGO',
    ],
    E: [
       'Earnest Money Receipt For A Property',
    ],
    F: [
        'Format For Registration Of A Society |',
        'Format for welfare-charitable trust-NGO',
        'Franchise Agreement Format Sample',
    ],
    G: [
        'General Power Of Attorney For A Property',
    ],
    L: [
        'Lease Deed Residential Property',
    ],
    M: [
        'Mutual Divorce Petition Draft',
        'Mutual Divorce Agreement',
        'MUTUAL COMPROMISE DEED',
    ],
    N: [
        'Name Change Affidavit Format',
        'Notice Format Under Section 138',
    ],
    P: [
        'PIL in High Court',
        'Possession Letter For A Property',
    ],
    R: [
        'Residential Property Lease Deed Draft',
        'Resignation Letter',
        'RELINQUISHMENT DEED',
        'RTI Application Form',
    ],
    S: [
        'Sale And Purchase Agreement',
        'Sale And Purchase Agreement For Society Flats In Delhi',
        'Settlement with Employee',
        'Special Power Of Attorney For Legal Authorization',
        'Supreme Court Public Interest Litigation',
    ],
    T: [
        'Trust in India-Charitable Trust-Welfare Trust',
    ],
    W: [
        'WILL',
    ],
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Legal Formats List</h1>
      <ul className="list-group">
        {Object.entries(legalFormats).map(([letter, formats]) => (
          <li key={letter} className="list-group-item">
            <h4>{letter}</h4>
            <ul>
              {formats.map((format, index) => (
                               <li key={index}>
                               {format === 'Agreement Between Contractor And Principal Employer' ? (
                                 <Link to="/agreement-between-contractor-and-principal-employer">
                                   {format}
                                 </Link>
                               ) : (
                                 <Link to={`/legal-forms/${format.toLowerCase().replace(/\s+/g, '-')}`}>
                                   {format}
                                 </Link>
                               )}
                             </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegalFormatsList;
