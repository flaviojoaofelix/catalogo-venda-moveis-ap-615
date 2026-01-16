import { useState, useEffect, useCallback, useRef } from 'react';
import type { Product } from '../types';
import { getAssetUrl } from '../utils/assets';
import { CloseIcon } from './icons/CloseIcon';
import './ProductModal.css';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % product.media.length);
  }, [product.media.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + product.media.length) % product.media.length);
  }, [product.media.length]);

  // Focus Trap
  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.focus();

      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        handleTabKey(e);
      };

      modalElement.addEventListener('keydown', handleKeyDown);
      return () => {
        modalElement.removeEventListener('keydown', handleKeyDown);
        previousFocus.current?.focus();
      };
    }
  }, [onClose, handleNext, handlePrev]);

  const currentMedia = product.media[currentIndex];

  if (!currentMedia) return null;

  return (
    <div className='product-modal-backdrop' role='presentation' onClick={onClose}>
      <div
        className='product-modal'
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        aria-describedby='modal-desc'
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={modalRef}
      >
        <button
          type='button'
          className='product-modal__close'
          onClick={onClose}
          aria-label='Fechar'
        >
          <CloseIcon aria-hidden='true' />
        </button>
        <div className='product-modal__body'>
          <div className='product-modal__media-section'>
            {currentMedia.type === 'video' ? (
              <video
                src={getAssetUrl(currentMedia.src)}
                className='product-modal__media'
                controls
                autoPlay
                muted
              />
            ) : (
              <img
                src={getAssetUrl(currentMedia.src)}
                alt={product.title}
                className='product-modal__media'
              />
            )}

            {product.media.length > 1 && (
              <>
                <button
                  type='button'
                  className='product-modal__nav-btn product-modal__nav-btn--prev'
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label='Anterior'
                >
                  ←
                </button>
                <button
                  type='button'
                  className='product-modal__nav-btn product-modal__nav-btn--next'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label='Próximo'
                >
                  →
                </button>
                <div className='product-modal__thumbnails'>
                  {product.media.map((media, idx) => (
                    <button
                      type='button'
                      key={media.src}
                      className={`product-modal__thumbnail-btn ${currentIndex === idx ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                    >
                      <img
                        src={getAssetUrl(media.src)}
                        alt={`Thumbnail ${idx + 1}`}
                        className={`product-modal__thumbnail ${currentIndex === idx ? 'product-modal__thumbnail--active' : ''}`}
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className='product-modal__details'>
            <h2 id='modal-title' className='product-modal__title'>
              {product.title}
            </h2>
            <p id='modal-desc' className='product-modal__description'>
              {product.description}
            </p>
            <div className='product-modal__price'>
              {product.price > 0 ? `R$ ${product.price.toLocaleString('pt-BR')}` : 'Sob Consulta'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
