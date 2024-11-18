'use client'

import { useState, useEffect } from 'react'

import Header from '@/components/Header'

import { SearchBar } from '@/components/Header'

import Footer from '@/components/Footer'
import ProductItem from './ProductItem'

import './style.css'

const Products = () => {
    const [page, setPage] = useState(1)
    const [products, setProducts] = useState([])

    async function fetchProducts(page) {
        const response = await fetch(`https://form-test-api.vercel.app/api/products?page=${page}`)
        const data = await response.json()
        setProducts(prev => [...prev, ...data.products])
    }

    useEffect(() => {
        fetchProducts(page)
    }, [page])

    const handleScroll = () => {
        //console.log(window.innerHeight) // chiều cao của cửa sổ trình duyệt
        //console.log(document.documentElement.scrollTop ) // chiều cao của cuộn
        //console.log(document.documentElement.offsetHeight) // chiều cao của trang web
        if (window.innerHeight + document.documentElement.scrollTop 
            >= document.documentElement.offsetHeight) {
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll) // khi component mount lần đầu, đăng ký sự kiện scroll
        return () => window.removeEventListener('scroll', handleScroll) // cleanup function: chạy khi component will unmount, huỷ đăng ký sự kiện scroll
    }, []) // chỉ chạy 1 lần để không bị rò rỉ bộ nhớ (memory leak)

    return (
        <div>
            <Header />
            <h1 className='bg-primary text-primary-foreground'>Products</h1>
            <h1 className='bg-orange-500 text-white text-center'>Hello</h1>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} message={'hello'} />
                ))}
            </ul>
            <Footer />
        </div>
    )
}

export default Products