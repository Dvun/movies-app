import React, {FC} from 'react';
import {useFormContext} from 'react-hook-form';


interface CheckBoxFieldProps {
  name: string
  label?: string
}

export const CheckBoxField: FC<CheckBoxFieldProps> = ({label, name}) => {
  const {register, watch} = useFormContext()

  const watchField = watch()
  
  return (
    <div className="form-check">
      {
        watchField &&
        <input
          type="checkbox"
          className="form-check-input"
          id={name}
          {...register(`${name}`)}
        />
      }
      <label className="form-check-label" htmlFor={name}>{label}</label>
    </div>
  )
}