import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '../hooks/useAuth';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  address: string;
}

const Signup = () => {
  const { signup } = useAuth();

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    signup(email, password);
  };

  return (
    <>
      <h1>Admin Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input {...register("email", { required: true })} />
        <label>Password:</label>
        <input {...register("password", { required: true })} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Signup;
