


const ProductItem = ({ product }) => {
    return (
        <li>
            <p>Name: {product.name}</p>
            <img src={product.imgurl} width={100} height={100} />
        </li>
    )
}

export default ProductItem