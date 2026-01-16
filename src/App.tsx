import { useState } from 'react';
import { Gallery } from './components/Gallery';
import { ProductModal } from './components/ProductModal';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { products } from './data/products';
import type { Product } from './types';
import './styles/global.css';

function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main>
      <header
        style={{
          padding: 'var(--spacing-md)',
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-sm)',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 'var(--spacing-md)', right: 'var(--spacing-md)' }}>
          <ThemeToggle />
        </div>
        <div>
          <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-xs)' }}>
            Móveis à Venda
          </h1>
          <h2 style={{ fontSize: 'var(--font-size-md)', marginBottom: 'var(--spacing-xs)' }}>
            AP 615 - Condomínio Jardim Imperiale / Itacorubi
          </h2>
          <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>
            Estamos de mudança do nosso apartamento e estamos vendendo nossos móveis e
            eletrodomésticos.
          </p>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--spacing-sm)' }}>
        <Gallery products={products} onProductClick={setSelectedProduct} />
      </div>

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
