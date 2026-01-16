import { useState } from 'react';
import { Gallery } from './components/Gallery';
import { ProductModal } from './components/ProductModal';
import { ThemeToggle } from './components/ThemeToggle';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { products } from './data/products';
import type { Product } from './types';
import './styles/global.css';
import './styles/App.css';

function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main>
      <header className='app-header'>
        <div className='app-theme-toggle'>
          <ThemeToggle />
        </div>
        <div>
          <h1 className='app-title'>Móveis à Venda</h1>
          <h2 className='app-subtitle'>AP 615 - Condomínio Jardim Imperiale / Itacorubi</h2>
          <p className='app-description'>
            Estamos de mudança do nosso apartamento e estamos vendendo nossos móveis e
            eletrodomésticos.
          </p>
        </div>
      </header>

      <div className='app-container'>
        <Gallery products={products} onProductClick={setSelectedProduct} />
      </div>

      <WhatsAppButton />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
