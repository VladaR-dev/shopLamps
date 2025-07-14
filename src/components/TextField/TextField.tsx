import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import s from './TextField.module.css';

interface Props<T extends FieldValues> {
  label: string;
  type: React.HTMLInputTypeAttribute;
  name: Path<T>;
  error?: FieldError;
  register: UseFormRegister<T>;
  validation: object;
}

export const TextField = <T extends FieldValues>({
  label,
  type,
  name,
  error,
  register,
  validation,
}: Props<T>) => {
  return (
    <div className={s.textField}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        autoComplete="true"
        {...register(name, validation)}
      />
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
};
