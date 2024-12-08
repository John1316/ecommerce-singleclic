type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    quantity?: number;
    rating?: Rating;
    title: string;
}
type Rating = {
    rate: number;
    count: number;
}
type ProductCardProps = {
    product: Product,
}
type AddToCartBtnProps = {
    product: Product, 
    isAdding: boolean, 
    handleAddToCart: () => void
}
type UseAnimatedRatingProps = {
    rating?: number;
    maxStars?: number;
    animationDelay?: number;
    icon?: ReactNode;
    emptyIcon?: ReactNode;
}