async function Product({ params }) {
  const response = await fetch(`https://form-test-api.vercel.app/api/product?id=${(await params).id}`)
  const product = await response.json()
  
  return (
    <div>
        <h1>Product Id: {product.id}</h1>
        <p className="text-2xl text-green-500 hover:text-red-900">Product Name: {product.name}</p>
        <img src={product.imgurl} width={200} height={200}/>
        <p>Product Price: {product.price}</p>
    </div>
    
  )
}

export default Product