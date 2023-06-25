import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  address: string;
}
  
const Signup = () => {
  const { signup } = useAuth()
  
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = handleSubmit(({ email, password }) => {
    signup(email, password);
  });

  return (
    <>
    <h1>Admin Registration</h1>
    <form onSubmit={onSubmit}>
      <label>Email:</label>
      <input {...register("email", {required: true})} />
      <label>Password:</label>
      <input {...register("password", {required: true})} />
      <label>Hospital Name:</label>
      <input {...register("name")}/>
      <label>Address</label>
      <input {...register('address')}/>
      <button type="submit">  Register </button>
    </form>
    </>
  );
}

export default Signup