import React from 'react';
import styles from './button.module.scss';

interface BProps {
  type: string
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

interface BIProps {
  children: React.ReactNode
  style: 'close' | 'icon' | 'icon__delete'
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

interface SBProps {
  children: JSX.Element | JSX.Element[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Button = (props: BProps): JSX.Element => {
  const { type, children, variant = 'primary', onClick } = props;

  return (
        <button type={type === 'submit' ? 'submit' : 'button'}
            className={`${styles.button} ${styles[`button--${variant}`]}`}
            onClick={onClick}
        >{children}</button>
  );
};

const ButtonIcon = (props: BIProps): JSX.Element => {
  const { children, style, onClick } = props;
  return (
        <div className={style === 'close' ? `${styles.closeButton}` : style === 'icon' ? `${styles.icon}` : `${styles.icon} ${styles.icon__delete}`} onClick={onClick}>{children}</div>
  );
};

const SelectedButton = (props: SBProps): JSX.Element => {
  const { children, onChange } = props;
  return (
        <select className={`${styles.button} ${styles.button__select}`} onChange={onChange}>{children}</select>
  );
};

export { SelectedButton, ButtonIcon };
export default Button;
