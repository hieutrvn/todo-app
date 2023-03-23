import React from 'react';

interface TextFieldProps {
  children: React.ReactNode
  type: string
  placeHolder: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = (props: TextFieldProps): JSX.Element => {
  const { children, type, placeHolder, id, value, onChange } = props;
  return (
        <label htmlFor="title">{children}
            <input type={type} placeholder={placeHolder} id={id} value={value} onChange={onChange} />
        </label>
  );
};
