// hooks/useFloatingCartAnimation.ts
import { useState } from 'react';



export const useFloatingCartAnimation = ({
  duration = 800,
  imageSize = 75,
  borderRadius = 8
}: FloatingCartAnimationProps = {}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = async (productId: string | number, imageUrl: string, onComplete?: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Create floating image
    const productImage = document.createElement('img');
    productImage.src = imageUrl;
    productImage.style.position = 'fixed';
    productImage.style.zIndex = '9999';
    productImage.style.width = `${imageSize}px`;
    productImage.style.height = `${imageSize}px`;
    productImage.style.borderRadius = `${borderRadius}px`;
    productImage.style.pointerEvents = 'none';

    // Get button and cart positions
    const buttonRect = document.querySelector(`#add-to-cart-${productId}`)?.getBoundingClientRect();
    const cartIcon = document.querySelector('.cart-icon')?.getBoundingClientRect();

    if (!buttonRect || !cartIcon) {
      setIsAnimating(false);
      return;
    }

    // Set initial position
    productImage.style.top = `${buttonRect.top}px`;
    productImage.style.left = `${buttonRect.left}px`;
    document.body.appendChild(productImage);

    try {
      // Create and run animation
      await new Promise((resolve) => {
        const animation = productImage.animate([
          {
            top: `${buttonRect.top}px`,
            left: `${buttonRect.left}px`,
            opacity: 1,
            transform: 'scale(1)'
          },
          {
            top: `${cartIcon.top}px`,
            left: `${cartIcon.left}px`,
            opacity: 0,
            transform: 'scale(0.5)'
          }
        ], {
          duration,
          easing: 'ease-in-out'
        });

        animation.onfinish = resolve;
      });
    } finally {
      // Cleanup
      productImage.remove();
      setIsAnimating(false);
      onComplete?.();
    }
  };

  return {
    animate,
    isAnimating
  };
};