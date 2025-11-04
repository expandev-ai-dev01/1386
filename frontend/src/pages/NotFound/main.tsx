import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';
import { Link } from 'react-router-dom';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes
 * @domain core
 * @type error-page
 * @category error
 */
export const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <Container>
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button size="lg">Voltar para o Início</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
