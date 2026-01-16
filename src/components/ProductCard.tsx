import type { Product } from '../types';
import './ProductCard.css';

import { getAssetUrl } from '../utils/assets';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  // Use the first media item as the thumbnail
  const thumbnail = product.media[0];
  const mediaCount = product.media.length;

  return (
    <button type='button' className='product-card' onClick={() => onClick(product)}>
      <div className='product-card__image-container'>
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
      </div>
      <div className='product-card__content'>
        <h3 className='product-card__title'>{product.title}</h3>
        <span className='product-card__price'>
          {product.price > 0 ? `R$ ${product.price.toLocaleString('pt-BR')}` : 'Sob Consulta'}
        </span>
      </div>
    </button>
  );
}
