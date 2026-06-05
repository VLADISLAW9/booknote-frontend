import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Booknote | Auth'
};

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className='flex min-h-screen items-center justify-center'>{children}</div>
);

export default AuthLayout;
