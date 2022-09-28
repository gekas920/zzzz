import React from 'react';
import './text-input.css';

interface TextInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  style?: React.CSSProperties;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  defaultValue,
  style,
}): JSX.Element => {
  return (
    <input
      className="text-input"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      style={style}
    />
  );
};

export default TextInput;
