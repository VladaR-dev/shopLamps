import s from './TextField.module.css';

export const TextField = ({
  label,
  type,
  name,
  error,
  register,
  validation,
}) => {
  return (
    <div className={s.textField}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        autoComplete="true"
        {...register(name, validation)}
      />
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
};
