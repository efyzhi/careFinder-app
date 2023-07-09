import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Signup.module.css';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
}

const Signup: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    signup(email, password);
    navigate('/admin-dashboard');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input className={styles.input} {...register("name", { required: true })} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input className={styles.input} {...register("email", { required: true })} />
          {errors.email && <p className={styles.error}>Email is required</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input className={styles.input} {...register("password", { required: true })} />
          {errors.password && <p className={styles.error}>Password is required</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Confirm Password:</label>
          <input className={styles.input} {...register("confirmPassword", { required: true })} />
          {errors.confirmPassword && <p className={styles.error}>Confirm Password is required</p>}
        </div>
        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
