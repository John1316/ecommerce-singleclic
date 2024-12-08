import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  id?: string;
  ariaLabel: string,
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  onClick,
  className,
  id,
  disabled
}) => {
  return (
    <button
      aria-label={ariaLabel}
      id={id}
      onClick={onClick}
      className={`rounded-lg px-[12px] ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};