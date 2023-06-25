import React from 'react';
import { useForm } from 'react-hook-form';
import MarkdownEditor from '../comps/Markdowneditor';

interface IFormInput {
  name: string;
  address: string;
  contactInfo: string;
}


const AdminDashboard = () => {
  const handleSaveEntry = async (content: string) => {{
    console.log(content)
  }}
  const { register, handleSubmit } = useForm<IFormInput>();
  return (
    <div>
        <h2></h2>
        <form>
          <label>Name:</label>
          <input {...register('name')} />
          <label>Address:</label>
          <input {...register('address')} />
          <label>Contact Info:</label>
          <input {...register('contactInfo')} />
          <button type='submit'> Add </button>
        </form>
        <MarkdownEditor onSave={handleSaveEntry} />
    </div>
  )
}

export default AdminDashboard