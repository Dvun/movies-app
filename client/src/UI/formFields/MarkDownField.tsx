import React, {FC} from 'react';
import styles from './markDownField.module.scss'
import {Controller, useFormContext} from 'react-hook-form';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface markDownProps {
  label: string
  name: string
}

const MarkDownField: FC<markDownProps> = (props: markDownProps) => {
  const {control, getValues} = useFormContext()
  
  return (
    <div className={styles.formMarkdown}>
        <label htmlFor={props.name}>{props.label}</label>
        <Controller
          control={control}
          name={props.name}
          render={({field}) => {
            return <CKEditor
              editor={ ClassicEditor }
              data={getValues(props.name)}
              onChange={(value: string, editor: any) => field.onChange(editor.getData())}
            />
          }}
        />
    </div>
  );
};

export default MarkDownField;