import React from "react";
import styles from "../styles/About.module.css"

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>About</h1>
      <div>
      <h2>About Carefinder</h2>
      <p>
        Carefinder is a user-friendly web application designed to help individuals find hospitals in their region quickly and easily.
      </p>
      <p>
        Our mission is to provide a comprehensive and reliable platform that empowers users to make informed decisions about their healthcare needs. Whether you are looking for emergency care, specialized treatments, or general healthcare services, Carefinder has you covered.
      </p>
      <p>
        With our extensive database of hospitals and user-friendly search functionality, you can find the best healthcare options that match your requirements. We strive to simplify the process of finding hospitals, providing contact details, and enabling seamless sharing of information with others.
      </p>
      <p>
        Carefinder is committed to maintaining accurate and up-to-date information about hospitals, ensuring that users have access to the most relevant and reliable data. We are constantly working to enhance our features and improve the user experience to better serve your healthcare needs.
      </p>
      <p>
        Thank you for choosing Carefinder. We are dedicated to helping you navigate the world of healthcare and find the best hospitals to meet your needs.
      </p>
    </div>
    </div>
  );
};

export default About;
