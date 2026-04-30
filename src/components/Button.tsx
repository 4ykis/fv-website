import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function Button({ children, className = '', ...props }: Props) {
  return <button className={`rounded-xl bg-brandRed px-5 py-2.5 font-semibold text-white transition hover:bg-red-700 ${className}`} {...props}>{children}</button>;
}
