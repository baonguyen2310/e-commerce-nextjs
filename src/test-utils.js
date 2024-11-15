import { render } from '@testing-library/react'
import { UserProvider } from '@/context/UserContext'

const customRender = (ui, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <UserProvider>
        {children}
      </UserProvider>
    ),
    ...options,
  })
}

export * from '@testing-library/react'
export { customRender as render } 