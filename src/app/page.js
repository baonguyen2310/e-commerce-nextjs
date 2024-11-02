import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Home Page</h1>
            <Link href='/products' className='text-blue-500 hover:text-blue-800'>Products</Link>
            <a href='/products'>Products</a>
            <Footer />
        </div>
    )
}

export default Home