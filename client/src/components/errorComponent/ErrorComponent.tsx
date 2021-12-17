import React, {FC} from 'react';


interface ErrorComponentProps {
  value: string
}

const ErrorComponent: FC<ErrorComponentProps> = ({value}) => {

  return (
    <span className='text-danger' style={{fontSize: '13px', position: 'absolute', bottom: '192px'}}>{value}</span>
  );
};

export default ErrorComponent;