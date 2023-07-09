import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFirestore from '../hooks/useFirestore';

interface IFormInput {
  name: string;
  address: string;
  contactInfo: string;
  email: string;
}

const AdminDashboard: React.FC = () => {
  const { createDocument } = useFirestore({ collectionName: 'hospitals' });

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const handleCreate: SubmitHandler<IFormInput> = async (data) => {
    await createDocument(data);
    reset();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit(handleCreate)}>
        <label>Name:</label>
        <input {...register('name')} />
        <label>Address:</label>
        <input {...register('address')} />
        <label>Contact Info:</label>
        <input {...register('contactInfo')} />
        <label>Email:</label>
        <input {...register('email')} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
