import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  danger = false,
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    danger ? styles.danger : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;