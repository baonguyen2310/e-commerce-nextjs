'use client'

/*
    Trong React, có 2 cách truyền dữ liệu từ component cha sang component con:
    1. Props
    // Ví dụ: theme
    // Truyền từ Home => Products => ProductItem => ProductDetail => ProductButton
    // Nhược điểm: phải truyền qua nhiều cấp

    2. Context API

    Context API là một cách để truyền dữ liệu giữa các component mà không cần phải truyền qua các props.
    Context API giúp chúng ta quản lý dữ liệu một cách hiệu quả hơn và giảm thiểu việc truyền props qua nhiều cấp.

    // Ứng dụng: theme, user, cart, ...
*/


import { createContext, useState, useEffect } from 'react'



const UserContext = createContext() // Tạo ra một object context có 1 thuộc tính là Provider, Provider này là 1 component của react

export function UserProvider({ children }) { // Component Provider: nhà cung cấp
    const [user, setUser] = useState(null)

    useEffect(() => {
        // localStorage là một cách lưu trữ dữ liệu trên trình duyệt dạng key-value
        const savedUser = localStorage.getItem('user') 
        if (savedUser) {
            setUser(JSON.parse(savedUser)) // Chuyển đổi chuỗi json thành object js
        }
    }, [])

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user')
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

// Những children nào nằm trong component Provider thì sẽ có thể sử dụng được context này


export default UserContext 