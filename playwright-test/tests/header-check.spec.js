const { test, expect } = require('@playwright/test');

test('Проверка заголовка сайта playwright.dev', async ({ page }) => {
  
  await page.goto('https://playwright.dev/', { waitUntil: 'networkidle' });
  
  
  await expect(page).toHaveTitle(/Playwright/);
  
 
  const title = await page.title();
  console.log('✅ Заголовок страницы:', title);
});
