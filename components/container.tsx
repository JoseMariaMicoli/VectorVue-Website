import { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:max-w-[2200px] 4xl:px-20 ${className}`}>{children}</div>;
}
