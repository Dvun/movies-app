import React, {FC} from 'react';
import styles from './inputField.module.scss'
import {ErrorMessage} from '@hookform/error-message';
import {useFormContext} from 'react-hook-form';

interface InputFieldProps {
  name: string
  label?: string
  type?: string
  className?: string
  placeholder?: string
}

export const CreateInputField: FC<InputFieldProps> = (props: InputFieldProps) => {
  const {register, formState: {errors}} = useFormContext()

  return (
    <div className={styles.div}>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} id={props.name} {...register(`${props.name}`)}/>
      <ErrorMessage errors={errors} name={props.name} render={({message}) => <span className="text-danger">{message}</span>}/>
    </div>
  );
};


export const InputField: FC<InputFieldProps> = (props: InputFieldProps) => {
  const {register, formState: {errors}} = useFormContext()

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} id={props.name} {...register(`${props.name}`)}/>
      <ErrorMessage errors={errors} name={props.name} render={({message}) => <span className="text-danger">{message}</span>}/>
    </>
  );
};