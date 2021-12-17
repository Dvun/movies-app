import React, {FC} from 'react';
import {useFormContext} from 'react-hook-form';
import {IGenre} from '../../interfaces/interfaces';


interface SelectFieldProps {
  name: string
  options: IGenre[]
}

const SelectField: FC<SelectFieldProps> = ({name, options}) => {
  const {register} = useFormContext()

  return (
    <select className='form-select' {...register(`${name}`)}>
      <option value="0">--Choose a genre--</option>
      {options.map(({id, name}) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  );
};

export default SelectField;