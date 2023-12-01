// Categories.js

import React from 'react';
import styles from './Categories.css';

const Categories = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Explore Legal Categories</h1>
      </header>

      {/* Bootstrap Carousel */}
      <div id="categoryCarousel" className={`carousel slide ${styles.categoryCarousel}`} data-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${styles.categoryItem} active`}>
            <div className={styles.category}>
              <img src="https://img.freepik.com/premium-vector/vector-illustration-black-white-style-clenched-fist-held-high-protest_573689-96.jpg?w=740" alt="Know your rights"/>
              <h2>KNOW YOUR RIGHTS</h2>
              <a href="/know-your-rights">Explore</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <h2>UPLOAD YOUR DOCUMENTS</h2>
              <a href="/upload-your-docs">Explore</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <h2>LEGAL WRITING</h2>
              <a href="/legal-writing">Explore</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <h2>FORMS AND WAIVERS</h2>
              <a href="/forms-and-waivers">Explore</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <h2>CONTRACT DRAFTING</h2>
              <a href="/work-page">Explore</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <h2>LEGAL CONSULTATIONS</h2>
              <a href="/work-page">Explore</a>
            </div>
          </div>
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

export default Categories;
