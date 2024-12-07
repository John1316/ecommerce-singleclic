interface CartItem extends Product {
    quantity: number;
}
type CartState = {
    items: CartItem[];
    total: number;
    itemCount: number
}
  
type FloatingCartAnimationProps = {
  duration?: number;
  imageSize?: number;
  borderRadius?: number;
}