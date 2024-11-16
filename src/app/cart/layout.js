const CartLayout = ({ children }) => { // layout nhận vào prop children chính là component con (page)
    return (
        <div className='cart-layout'>
            {children}
        </div>
    )
}

export default CartLayout