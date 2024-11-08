'use client'

import { useState, useEffect } from 'react'

import Header from '@/components/Header'

import { SearchBar } from '@/components/Header'

import Footer from '@/components/Footer'
import ProductItem from './ProductItem'

import styles from './products.module.css'

import './style.css'

const Products = () => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [products, setProducts] = useState([])

    function handlePreviousBtn() {
        if (page > 1) {
            setPage(page => page - 1)
        }
    }
    function handleNextBtn() {
        if (page < totalPages) {
            setPage(page => page + 1)
        }
    }

    async function fetchProducts(page) {
        const response = await fetch(`https://form-test-api.vercel.app/api/products?page=${page}`)
        const data = await response.json()
        setTotalPages(data.totalPages)
        setProducts(data.products)
    }
    useEffect(() => {
        fetchProducts(page)
    }, [page])

    return (
        <div>
            <Header />
            <h1 className='bg-primary text-primary-foreground'>Products</h1>
            <h1 className='bg-orange-500 text-white text-center'>Hello</h1>
            <ul>
                {
                    products.map((product) => {
                        return (
                            <ProductItem key={product.id} product={product} message={'hello'} />
                        )
                    })
                }
            </ul>
            <p>Page: {page} / { totalPages } </p>
            <button onClick={handlePreviousBtn} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Previous</button>
            <button className='next-btn' onClick={handleNextBtn}>Next</button>
            <button className={styles['btn-primary']} onClick={handleNextBtn}>Next</button>

            <Footer />
        </div>
    )
}

export default Products