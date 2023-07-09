import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

interface IFormInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Access the navigate function from React Router
  const [loginError, setLoginError] = useState('');

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      await login(email, password);
      navigate('/dashboard'); // Navigate to the AdminDashboard page
    } catch (error) {
      setLoginError('Invalid email or password. Please try again.');
    }
  });

  return (
    <div className={styles.container}>
      <h1>Admin Login</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} {...register('email', { required: true })} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input className={styles.input} {...register('password', { required: true })} />
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
      {loginError && <p className={styles.error}>{loginError}</p>}
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    
    </div>
  );
};

export default Login;
