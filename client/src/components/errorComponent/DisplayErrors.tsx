import React, {FC} from 'react';

interface DisplayErrorsProps {
  errors?: string[]
}

const DisplayErrors: FC<DisplayErrorsProps> = ({errors}) => {
  
  const style = {
    color: 'darkred',
    fontColor: '13px'
  }

  return (
    <>
      {
        errors &&
        <ul>
          {
            errors?.map((error, index) => <li key={index} style={style}>{error}</li>)
          }
        </ul>
      }
    </>
  );
};

export default DisplayErrors;