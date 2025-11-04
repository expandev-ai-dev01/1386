import { clsx } from 'clsx';

export interface ContainerVariantProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}

export function getContainerClassName(props: ContainerVariantProps): string {
  const { maxWidth = 'lg', className } = props;

  return clsx(
    'mx-auto px-4 sm:px-6 lg:px-8',
    {
      'max-w-screen-sm': maxWidth === 'sm',
      'max-w-screen-md': maxWidth === 'md',
      'max-w-screen-lg': maxWidth === 'lg',
      'max-w-screen-xl': maxWidth === 'xl',
      'max-w-screen-2xl': maxWidth === '2xl',
      'max-w-full': maxWidth === 'full',
    },
    className
  );
}
