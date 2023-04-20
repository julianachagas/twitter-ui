import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { Status } from './pages/Status';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/status/:id',
        element: <Status />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
