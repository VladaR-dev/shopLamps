import { Form } from '../components';
import s from './Form.module.css';

export const SignUp = () => {
  return (
    <div className={s.pageForm}>
      <h2>Create an account</h2>
      <Form type="reg" />
    </div>
  );
};
