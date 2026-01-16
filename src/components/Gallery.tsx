import * as React from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import './Gallery.css';

interface GalleryProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

type SortOption = 'title' | 'price' | 'available';

export function Gallery({ products, onProductClick }: GalleryProps) {
  const [sortOption, setSortOption] = React.useState<SortOption>('available');

  const sortedProducts = React.useMemo(() => {
    return [...products].sort((a, b) => {
      // ... sort logic same as before ...
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === 'price') {
        return a.price - b.price;
      }
      if (sortOption === 'available') {
        return a.available === b.available ? 0 : a.available ? -1 : 1;
      }
      return 0;
    });
  }, [products, sortOption]);

  return (
    <section className='gallery'>
      <div className='gallery__controls'>
        <label htmlFor='sort-select' className='gallery__sort-label'>
          Ordenar por:
        </label>
        <select
          id='sort-select'
          className='gallery__sort-select'
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as SortOption)}
        >
          <option value='available'>Disponibilidade</option>
          <option value='title'>Nome (A-Z)</option>
          <option value='price'>Preço (Menor - Maior)</option>
        </select>
      </div>
      <div className='gallery__grid'>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={onProductClick} />
        ))}
      </div>
    </section>
  );
}
