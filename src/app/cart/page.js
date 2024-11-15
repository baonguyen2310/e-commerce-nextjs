'use client'

import { useState, useEffect } from "react"

const Cart = () => {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        const response = await fetch(`https://form-test-api.vercel.app/api/cart?userId=khanh01`)
        const data = await response.json()
        setProducts(data.items)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    async function handleQuantityInputChange(productId, quantity) {

    }

    async function handleDecreaseBtn(product) {
        const response = await fetch('https://form-test-api.vercel.app/api/cart', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 'khanh01',
                productId: product.productId,
                quantity: product.quantity - 1
            })
        })
        const data = await response.json()
        setProducts(data.items)
    }

    async function handleIncreaseBtn(product) {

    }

    async function handleDeleteBtn(product) {
        const response = await fetch('https://form-test-api.vercel.app/api/cart', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 'khanh01',
                productId: product.productId
            })
        })

        const data = await response.json()
        setProducts(data.items)
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {
                    products.map((product) => {
                        return (
                            <li key={product.productId}>
                                <p>Product ID: {product.productId}</p>
                                <button onClick={() => handleDecreaseBtn(product)}>-</button>
                                <input onChange={(e) => handleQuantityInputChange(product.productId, Number(e.target.value))} value={product.quantity} />
                                <button onClick={handleIncreaseBtn}>+</button>
                                <button onClick={() => handleDeleteBtn(product)}>Xoá</button>
                                {/*
                                    onClick = 1 hàm nhận vào 0 tham số hoặc 1 tham số event
                                    onClick = khai báo hàm chứ không được bằng gọi hàm
                                    Nếu hàm handle nhận vào tham số không phải event thì phải dùng 1 hàm bọc ngoài hàm handle
                                */}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Cart