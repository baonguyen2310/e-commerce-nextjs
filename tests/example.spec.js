import { test, expect } from '@playwright/test'
 
test('should navigate to the about page', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('a[href="/products"]')
  await expect(page).toHaveURL('http://localhost:3000/products')
  
  const headings = await page.locator('h1').allTextContents()
  expect(headings.some(text => text.includes('Products'))).toBeTruthy()
})