import { FC, ReactNode } from "react";

export interface LabelProps {
  label?: ReactNode;
  required?: boolean;
  children?: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({
  label,

  className,
  required,
  children,
}) => {
  return (
    <label className="relative">
      <p
        className={`text-gray-900 dark:text-white  text-md  font-poppins font-medium ${className}`}
      >
        {label}

        {label && required && (
          <span className="text-error text-red-600 ml-1">*</span>
        )}
      </p>
      {children}
    </label>
  );
};

export default Label;
