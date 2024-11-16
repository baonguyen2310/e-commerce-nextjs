'use client'

import { useContext } from 'react'
import UserContext from '@/context/UserContext'

const Footer = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h3>Footer</h3>
            {user && <p>Thank you for shopping with us, {user.name}</p>}
        </div>
    )
}

export default Footer