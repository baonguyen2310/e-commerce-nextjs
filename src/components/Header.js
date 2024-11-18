'use client'

import { useContext } from 'react'
import UserContext from '@/context/UserContext'
import Weather from './Weather'

const Header = () => {
    const { user, setUser } = useContext(UserContext)


    // ? : là toán tử 3 ngôi (condition ? true : false)
    return (
        <div className='header'>
            <h1 className='welcome'>
            {user ? (
                <>
                    <p>Welcome, {user.name}</p>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
            ) : (
                <button onClick={() => setUser({ id: 1, name: 'John' })}>Login</button>
            )}
            </h1>
            <Weather />
        </div>
        
    )
}

const SearchBar = () => {
    return (
        <h1>Search bar</h1>
    )
}

export default Header

export { SearchBar }