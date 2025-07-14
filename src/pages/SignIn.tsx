import { Form } from '../components';
import s from './Form.module.css';

export const SignIn = () => {
  return (
    <div className={s.pageForm}>
      <h2>Log In your account</h2>
      <Form />
    </div>
  );
};
