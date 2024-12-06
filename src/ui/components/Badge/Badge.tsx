// src/components/ui/Badge/Badge.tsx
import React from 'react';
import { Chip } from "@nextui-org/react";

type BadgeProps = {
  children: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = "primary",
  variant = "flat",
  className,
}) => {
  return (
    <Chip
      color={color}
      variant={variant}
      className={className}
    >
      {children}
    </Chip>
  );
};