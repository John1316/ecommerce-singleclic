import React, { createContext, useEffect } from 'react';
import axios from 'axios';
// import { Product, CartItem, CartState } from '../types/cart.types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const initialCartState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useLocalStorage<CartState>('cart', initialCartState);

  // Verify cart items exist in API and remove if not found
  useEffect(() => {
    const validateCartItems = async () => {
      try {
        const productIds = state.items.map(item => item.id);
        const validProducts = await Promise.all(
          productIds.map(async (id) => {
            try {
              await axios.get(`https://fakestoreapi.com/products/${id}`);
              return true;
            } catch {
              return false;
            }
          })
        );

        const invalidIds = productIds.filter((_, index) => !validProducts[index]);
        
        if (invalidIds.length > 0) {
          const newItems = state.items.filter(item => !invalidIds.includes(item.id));
          const newTotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
          const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
          
          setState({
            items: newItems,
            total: newTotal,
            itemCount: newItemCount,
          });
        }
      } catch (error) {
        console.error('Error validating cart items:', error);
      }
    };

    validateCartItems();
  }, []); // Run once on mount

  const addToCart = (product: Product) => {
    setState(prevState => {
      const existingItem = prevState.items.find(item => item.id === product.id);

      if (existingItem) {
        const updatedItems = prevState.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          items: updatedItems,
          total: prevState.total + product.price,
          itemCount: prevState.itemCount + 1,
        };
      }

      return {
        items: [...prevState.items, { ...product, quantity: 1 }],
        total: prevState.total + product.price,
        itemCount: prevState.itemCount + 1,
      };
    });
  };

  const removeFromCart = (productId: number) => {
    setState(prevState => {
      const item = prevState.items.find(item => item.id === productId);
      if (!item) return prevState;

      return {
        items: prevState.items.filter(item => item.id !== productId),
        total: prevState.total - (item.price * item.quantity),
        itemCount: prevState.itemCount - item.quantity,
      };
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    console.log("🚀 ~ updateQuantity ~ newQuantity:", newQuantity)
    if (newQuantity < 0) return;

    setState(prevState => {
      const item = prevState.items.find(item => item.id === productId);
      if (!item) return prevState;

      if (newQuantity === 0) {
        return {
          items: prevState.items.filter(item => item.id !== productId),
          total: prevState.total - (item.price * item.quantity),
          itemCount: prevState.itemCount - item.quantity,
        };
      }

      const quantityDiff = newQuantity - item.quantity;
      
      return {
        items: prevState.items.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        ),
        total: prevState.total + (item.price * quantityDiff),
        itemCount: prevState.itemCount + quantityDiff,
      };
    });
  };

  const clearCart = () => {
    setState(initialCartState);
  };

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};