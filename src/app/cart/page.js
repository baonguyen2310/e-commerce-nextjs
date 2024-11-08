'use client'
import { useState, useEffect } from 'react'

const Cart = () => {
    const [cart, setCart] = useState([
        {
            productId: 1,
            quantity: 1
        }
    ])

    function handleIncreaseBtn() {
        setCart([
            ...cart, 
            {
                productId: 2,
                quantity: 1
            }
        ])
    }

    return (
        <div>
            <h1>Cart</h1>
            <h2>Product Id: 2</h2>
            <button onClick={handleIncreaseBtn}>+</button>
            <ul>
                {
                    cart.map((item) => {
                        return (
                            <li key={item.productId}>
                                <p>ProductId: {item.productId}</p>
                                <p>Quantity: {item.quantity}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Cart