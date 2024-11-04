import { useRouter } from 'next/navigation'


const ProductItem = ({ product }) => {
    const router = useRouter()

    return (
        <li onClick={ () => router.push(`/products/${product.id}`) }>
            <p>Name: {product.name}</p>
            <img src={product.imgurl} width={100} height={100} />
        </li>
    )
}

export default ProductItem