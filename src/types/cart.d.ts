interface CartItem extends Product {
    quantity: number;
}
type CartState = {
    items: CartItem[];
    total: number;
    itemCount: number
}
  
  type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };