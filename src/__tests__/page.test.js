import '@testing-library/jest-dom'
import { render, screen } from '../test-utils'
import Page from '../app/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { 
      level: 1,
      name: /home page/i
    })
    expect(heading).toBeInTheDocument()
  })
})