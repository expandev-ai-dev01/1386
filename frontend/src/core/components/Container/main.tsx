import { getContainerClassName } from './variants';
import type { ContainerProps } from './types';

/**
 * @component Container
 * @summary Responsive container component for content layout
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Container = (props: ContainerProps) => {
  const { children, maxWidth = 'lg', className } = props;

  return <div className={getContainerClassName({ maxWidth, className })}>{children}</div>;
};
