import React, {FC} from 'react';
import styles from './dateField.module.scss'
import {Controller, useFormContext} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css'

interface dateFieldProps {
  name: string
  label: string
}

const DateField: FC<dateFieldProps> = (props: dateFieldProps) => {
  const {control, formState: {errors}} = useFormContext()

  return (
    <div className={styles.div}>
      <label htmlFor={props.name}>{props.label}</label>
      <Controller
        control={control}
        name={props.name}
        render={({field}) => {
          return <ReactDatePicker
            id={props.name}
            onChange={(date: Date) => field.onChange(date)} 
            selected={field.value}
            placeholderText='mm/dd/yyyy'
            isClearable={true}
          />;
        }}
      />
      <ErrorMessage
        errors={errors} 
        name={props.name}
        render={({message}) => <span className={styles.error}>This field is required!</span>}/>
    </div>
  );
};

export default DateField;