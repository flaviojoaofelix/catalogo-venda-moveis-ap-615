import { memo } from 'react';
import type { Product } from '../types';
import './ProductCard.css';

import { getAssetUrl } from '../utils/assets';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard = memo(function ProductCard({ product, onClick }: ProductCardProps) {
  // Safe access due to noUncheckedIndexedAccess
  const thumbnail = product.media[0];
  const mediaCount = product.media.length;

  if (!thumbnail) {
    return null; // Or a placeholder
  }

  return (
    <button type='button' className='product-card' onClick={() => onClick(product)}>
      <div
        className={`product-card__image-container ${
          product.status === 'sold' ? 'product-card__image-container--sold' : ''
        }`}
      >
        {thumbnail.type === 'video' ? (
          <video
            src={getAssetUrl(thumbnail.src)}
            className='product-card__image'
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={getAssetUrl(thumbnail.src)}
            alt={product.title}
            className='product-card__image'
            loading='lazy'
          />
        )}
        {mediaCount > 1 && <span className='product-card__badge'>+{mediaCount - 1} mídias</span>}
        {product.status === 'reserved' && (
          <span className='product-card__status-badge product-card__status-badge--reserved'>
            Reservado
          </span>
        )}
        {product.status === 'sold' && (
          <span className='product-card__status-badge product-card__status-badge--sold'>
            Vendido
          </span>
        )}
      </div>
      <div className='product-card__content'>
        <h3 className='product-card__title'>{product.title}</h3>
        <span className='product-card__price'>
          {product.price > 0 ? `R$ ${product.price.toLocaleString('pt-BR')}` : 'Sob Consulta'}
        </span>
      </div>
    </button>
  );
});
