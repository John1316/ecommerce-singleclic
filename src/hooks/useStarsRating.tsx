// hooks/useAnimatedRating.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import StarIcon from '../ui/svgs/StarIcon';

interface UseAnimatedRatingProps {
  rating?: number;
  maxStars?: number;
  animationDelay?: number;
  icon?: ReactNode;
  emptyIcon?: ReactNode;
}

export const useStarsRating = ({
  rating = 0,
  maxStars = 5,
  animationDelay = 0.1,
  icon = <StarIcon  />,
  emptyIcon = <StarIcon  />
}: UseAnimatedRatingProps = {}) => {
  const roundedRating = Math.floor(rating);
  
  const renderRatingStars = () => {
    return Array.from({ length: maxStars }, (_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * animationDelay }}
        className="inline-flex"
      >
        {index < roundedRating ? icon : emptyIcon}
      </motion.div>
    ));
  };

  return {
    renderRatingStars,
    roundedRating,
    totalStars: maxStars
  };
};

