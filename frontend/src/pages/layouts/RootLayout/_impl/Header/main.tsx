import { Link } from 'react-router-dom';
import { Container } from '@/core/components/Container';

/**
 * @component Header
 * @summary Main application header with navigation
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Parque de Diversões</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Início
            </Link>
            <Link to="/atracoes" className="text-gray-700 hover:text-primary-600 transition-colors">
              Atrações
            </Link>
            <Link
              to="/ingressos"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Ingressos
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contato
            </Link>
          </nav>

          <button className="md:hidden p-2 text-gray-700 hover:text-primary-600" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};
