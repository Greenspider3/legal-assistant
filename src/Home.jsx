// Categories.js

import React from 'react';
import styles from './Categories.css';

const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Explore Our Services</h1>
      </header>

      {/* Bootstrap Carousel */}
      <div id="categoryCarousel" className={`carousel slide ${styles.categoryCarousel}`} data-ride="carousel">
        <div className="carousel-inner">
          <a href="/upload-your-docs" className={`carousel-item ${styles.categoryItem} active`}>
            <div className={styles.category}>
              <img src="documents_1548204.png" alt="Upload Your Docs"/>
              <h2>UPLOAD YOUR DOCUMENTS</h2>
            </div>
          </a>

          <a href="/legal-writing" className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="https://i.pinimg.com/564x/f8/a4/e4/f8a4e4f25f0c5fd23091afd1c3000da6.jpg" alt="Legal Writing"/>
              <h2>LEGAL WRITING</h2>
            </div>
          </a>

          <a href="/forms-and-waivers" className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="job_10485151.png" alt="Forms and Waivers"/>
              <h2>FORMS AND WAIVERS</h2>
            </div>
          </a>

          <a href="/work-page" className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="https://img.freepik.com/premium-vector/essay-icon-logo-isolated-sign-symbol-vector-illustration-high-quality-black-style-vector-icons_775815-260.jpg?w=740" alt="Contract Drafting"/>
              <h2>CONTRACT DRAFTING</h2>
            </div>
          </a>

          <a href="/legal-consultations" className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="6f43461d9dfdfd30b4385ad859eadf51.jpg" alt="Legal Consultations"/>
              <h2>LEGAL CONSULTATIONS</h2>
            </div>
          </a>
        </div>

        <a className="carousel-control-prev" href="#categoryCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#categoryCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
