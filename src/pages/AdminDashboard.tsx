import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFirestore from '../hooks/useFirestore';
import styles from '../styles/AdminDashboard.module.css';

interface IFormInput {
  name: string;
  address: string;
  contactInfo: string;
  email: string;
  location: string;
}

const AdminDashboard: React.FC = () => {
  const { createDocument } = useFirestore({ collectionName: 'hospitals' });

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const handleCreate: SubmitHandler<IFormInput> = async (data) => {
    await createDocument(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit(handleCreate)}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input className={styles.input} {...register('name')} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Address:</label>
          <input className={styles.input} {...register('address')} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Contact Info:</label>
          <input className={styles.input} {...register('contactInfo')} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input className={styles.input} {...register('email')} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Location:</label>
          <input className={styles.input} {...register('location')} />
        </div>
        <button className={styles.button} type="submit">Add</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
