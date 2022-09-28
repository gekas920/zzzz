import React, { PropsWithChildren } from 'react';
import './button.css';

interface ButtonProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
  style,
}): JSX.Element => {
  return (
    <button className="button" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
