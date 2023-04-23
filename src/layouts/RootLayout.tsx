import { Sidebar } from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { StyledRootLayout } from './styles/StyledRootLayout';

export const RootLayout = () => {
  return (
    <StyledRootLayout>
      <Sidebar />
      <Outlet />
    </StyledRootLayout>
  );
};
