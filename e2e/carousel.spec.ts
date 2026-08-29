import { test, expect } from '@playwright/test';

test.describe('Carousel Layout & Visuals', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage where the carousel is rendered
    await page.goto('/');
    
    // Wait for the carousel container to be visible
    await expect(page.locator('carousel')).toBeVisible();
  });

  test('slide should span the full width of its container', async ({ page }) => {
    const container = page.locator('.slides-container');
    const slide = page.locator('.carousel-slide').first();
    
    // Wait for any animations to settle
    await page.waitForTimeout(500);
    
    const containerBox = await container.boundingBox();
    const slideBox = await slide.boundingBox();
    
    expect(containerBox).toBeTruthy();
    expect(slideBox).toBeTruthy();
    
    // The slide width should be roughly equal to the container width (within 2px tolerance for rounding)
    expect(Math.abs(slideBox!.width - containerBox!.width)).toBeLessThanOrEqual(2);
  });

  test('bullets should be positioned as an overlay at the bottom center', async ({ page }) => {
    const slide = page.locator('.carousel-slide').first();
    const bulletsContainer = page.locator('.bullets-container');
    
    const slideBox = await slide.boundingBox();
    const bulletsBox = await bulletsContainer.boundingBox();
    
    expect(slideBox).toBeTruthy();
    expect(bulletsBox).toBeTruthy();
    
    // Bullets should be vertically inside the bottom of the slide
    expect(bulletsBox!.y + bulletsBox!.height).toBeLessThanOrEqual(slideBox!.y + slideBox!.height);
    
    // Bullets should be horizontally centered within the slide
    const slideCenter = slideBox!.x + slideBox!.width / 2;
    const bulletsCenter = bulletsBox!.x + bulletsBox!.width / 2;
    expect(Math.abs(slideCenter - bulletsCenter)).toBeLessThanOrEqual(5); // 5px tolerance
  });

  test('autoplay controls should be positioned as an overlay at the bottom right', async ({ page }) => {
    const slide = page.locator('.carousel-slide').first();
    const autoplayContainer = page.locator('.autoplay-container');
    
    const slideBox = await slide.boundingBox();
    const autoplayBox = await autoplayContainer.boundingBox();
    
    expect(slideBox).toBeTruthy();
    expect(autoplayBox).toBeTruthy();
    
    // Controls should be vertically inside the bottom of the slide
    expect(autoplayBox!.y + autoplayBox!.height).toBeLessThanOrEqual(slideBox!.y + slideBox!.height);
    
    // Controls should be near the right edge of the slide
    const slideRightEdge = slideBox!.x + slideBox!.width;
    const autoplayRightEdge = autoplayBox!.x + autoplayBox!.width;
    
    // The CSS sets `right: 14px`, so the right edge of the controls should be ~14px from the slide's right edge
    const distanceToRightEdge = slideRightEdge - autoplayRightEdge;
    expect(distanceToRightEdge).toBeGreaterThanOrEqual(10);
    expect(distanceToRightEdge).toBeLessThanOrEqual(20);
  });
  
  test('banner container should have zero height to not push slides down', async ({ page }) => {
    const bannerContainer = page.locator('.banner-container');
    const bannerBox = await bannerContainer.boundingBox();
    
    expect(bannerBox).toBeTruthy();
    expect(bannerBox!.height).toBe(0);
  });
});
