import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { RootLayout } from '@/pages/layouts/RootLayout';

const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @router AppRouter
 * @summary Main application routing configuration with lazy loading
 * and hierarchical layouts.
 * @type router-configuration
 * @category navigation
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Algo deu errado</h1>
          <p className="text-gray-600 mb-8">Por favor, recarregue a página</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Recarregar
          </button>
        </div>
      </div>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

/**
 * @component AppRouter
 * @summary Router provider component that wraps the entire application
 * with routing capabilities.
 */
export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
