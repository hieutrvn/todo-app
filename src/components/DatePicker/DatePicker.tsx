import React from 'react';

interface Props {
  children?: string
  type?: string
  id?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export const DatePicker = (props: Props): JSX.Element => {
  const { children, type, id, value, onChange } = props;
  return (<label htmlFor="date_deadline">{children}
        <input type={type} id={id} value={value} onChange={onChange} />
    </label>);
};
