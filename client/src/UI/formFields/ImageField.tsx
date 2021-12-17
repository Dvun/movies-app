import React, {FC, useCallback, useEffect, useState} from 'react';
import {generateToBase64} from '../../utils/GenerateToBase64';
import {Controller, useFormContext} from 'react-hook-form';
import {useLocation} from 'react-router-dom';

interface ImageFieldProps {
  label: string
  name: string
  imageUrl?: string
  register: any
}

const ImageField: FC<ImageFieldProps> = (props: ImageFieldProps) => {
  const location = useLocation()
  const {register, control, getValues, setValue, formState: {isSubmitted}} = useFormContext()
  const [imageUrl, setImageUrl] = useState(getValues(props.name))
  
  useEffect(() => {
    if (location.pathname === '/actors/create') isSubmitted && setImageUrl('')
  }, [isSubmitted, location.pathname])

  const imgPreviewHandle = useCallback(async (event) => {
    if (event.target.files[0]) {
      setImageUrl(await generateToBase64(event.target.files[0]))
      await register(props.name).onChange(event)
      setValue('picture', event.target.files[0])
    }
  }, [props.name, register, setValue])
  
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <div>
        <Controller
          control={control}
          name={props.name}
          render={({field}) => {
            return <input
              id="output"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={async (value: any) => {
                await imgPreviewHandle(value)
                field.onChange(value)
              }}
            />
          }}
        />
      </div>
      {
        imageUrl &&
        <div style={{marginTop: '10px'}}>
          <img src={imageUrl} alt="Selected" width="450px"/>
        </div>
      }
    </div>
  );
};

export default ImageField;