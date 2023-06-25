import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth'


interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth()
  
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = handleSubmit(({ email, password }) => {
    login(email, password);
  });

  return (
    <>
    <h1> Admin Login </h1>
    <form onSubmit={onSubmit}>
      <label>Email</label>
      <input {...register("email", {required: true})} />
      <label>Password</label>
      <input {...register("password", {required: true})} />
      <button type="submit">  Login </button>
    </form>
    </>
  );
}

export default Login