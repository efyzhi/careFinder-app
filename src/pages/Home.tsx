import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from 'react-router-dom';
import ExportComps from "../comps/ExportComps";


const Home: React.FC = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Find the Best Hospitals Near You</h1>
          <p>With Carefinder, easily search for hospitals in your region and access important contact details.</p>
          <Link to="/search" className={styles.ctaButton}>Get Started</Link>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/hero-image.png" alt="Hospital search" />
        </div>
      </section>

      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.feature}>
          <i className="fas fa-search"></i>
          <h3>Easy Hospital Search</h3>
          <p>Quickly find hospitals based on your location or nearby cities.</p>
        </div>
        <div className={styles.feature}>
          <i className="fas fa-download"></i>
          <h3>Export Hospital Lists</h3>
          <p>Export the list of hospitals to CSV for easy sharing and reference.</p>

          <ExportComps />
        </div>
        <div className={styles.feature}>
          <i className="fas fa-share-alt"></i>
          <h3>Share Hospital Information</h3>
          <p>Share hospital details with others via email or shareable links.</p>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonial}>
          <blockquote>"Carefinder made it so simple to find the best hospital for my needs. Highly recommended!"</blockquote>
          <cite>- John Doe</cite>
        </div>
      </section>

      <footer>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/carefinder" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com/carefinder" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/carefinder" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </>
  );
};

export default Home;
