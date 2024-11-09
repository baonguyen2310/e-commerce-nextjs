'use client'

import { useContext } from 'react'
import UserContext from '@/context/UserContext'

const Header = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <h1>
            {user ? (
                <>
                    <p>Welcome, {user.name}</p>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
            ) : (
                <button onClick={() => setUser({ id: 1, name: 'John' })}>Login</button>
            )}
        </h1>
    )
}

const SearchBar = () => {
    return (
        <h1>Search bar</h1>
    )
}

export default Header

export { SearchBar }