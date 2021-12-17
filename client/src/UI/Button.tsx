import React, {FC} from 'react';


interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({
                                   onClick,
                                   type = 'button',
                                   disabled = false,
                                   className = 'btn btn-primary',
                                   children,
                                 }) => {

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={className}>{children}</button>
  );
};

export default Button;