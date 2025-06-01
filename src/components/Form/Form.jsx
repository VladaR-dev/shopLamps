import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { TextField } from '../TextField';
import { passwordValidationRules } from './passwordRules';
import { Context } from '../../context';
import s from './Form.module.css';

export const Form = ({ type }) => {
  const { setIsAuth, users: usersList, setUsers } = useContext(Context);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const allValues = watch();

    const users = usersList || [];
    const newUser = { ...allValues };

    const coincidenceUser = users.find(
      (user) =>
        user.email.trim().toLowerCase() === newUser.email.trim().toLowerCase()
    );

    if (type === 'reg') {
      if (coincidenceUser) {
        toast.error('A user with this email already exists', {
          autoClose: 2000,
        });
        return;
      } else {
        users.push(newUser);

        setUsers(users);
        toast.success('Registration successful! Welcome!', { autoClose: 2000 });
      }
    } else {
      if (!coincidenceUser) {
        toast.error('User with this email not found', { autoClose: 2000 });
        return;
      } else {
        if (coincidenceUser.password === allValues.password) {
          toast.success(`Welcome back, ${coincidenceUser.name || 'user'}!`, {
            autoClose: 2000,
          });
          setIsAuth(true);
          history.push('/');
        } else {
          toast.error('Incorrect password', { autoClose: 2000 });
        }
      }
    }

    return;
  };

  return (
    <>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}>
        {type === 'reg' && (
          <TextField
            label="Name"
            name="name"
            type="text"
            register={register}
            error={errors.name}
            validation={{ required: 'Name is required' }}
          />
        )}
        <TextField
          label="Email"
          name="email"
          type="text"
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          }}
        />
        <div className={s.passwordContainer}>
          <TextField
            className={s.password}
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            register={register}
            error={errors.password}
            validation={passwordValidationRules}
          />
          <div
            className={s.eyePassword}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {type === 'reg' ? (
          <button type="submit">Register</button>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
    </>
  );
};
