import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { CartProvider } from './app/Providers/context/CartContext'

export default function Provider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <CartProvider>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </CartProvider>
    )
}
