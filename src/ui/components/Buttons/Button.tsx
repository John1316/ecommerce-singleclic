import React from 'react';
import { Button as NextUIButton } from "@nextui-org/react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  id?: string;
  ariaLabel: string,
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  color = "primary",
  size = "md",
  isLoading,
  ariaLabel,
  fullWidth,
  onClick,
  className,
  id,
  disabled
}) => {
  return (
    <NextUIButton
      aria-label={ariaLabel}
      id={id}
      variant={variant}
      color={color}
      size={size}
      isLoading={isLoading}
      fullWidth={fullWidth}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </NextUIButton>
  );
};