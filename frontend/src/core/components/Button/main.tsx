import { getButtonClassName } from './variants';
import type { ButtonProps } from './types';

/**
 * @component Button
 * @summary Reusable button component with multiple variants and sizes
 * @domain core
 * @type ui-component
 * @category form
 */
export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    type = 'button',
    onClick,
    className,
    ...rest
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={getButtonClassName({ variant, size, fullWidth, className })}
      {...rest}
    >
      {children}
    </button>
  );
};
