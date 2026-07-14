const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/home/bhavya-goel/.gemini/antigravity-ide/brain/47d0fe3f-3bad-4a6b-b271-97b2c561e9c7';

async function capture() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  // Set viewport to a desktop size so the "mobile-frame view" is visible in the center
  await page.setViewport({ width: 1024, height: 900, deviceScaleFactor: 1 });

  async function takeScreenshot(name) {
    // 1x
    await page.setViewport({ width: 1024, height: 900, deviceScaleFactor: 1 });
    await page.screenshot({ path: path.join(ARTIFACT_DIR, `${name}_1x.png`) });
    
    // 2x
    await page.setViewport({ width: 1024, height: 900, deviceScaleFactor: 2 });
    await page.screenshot({ path: path.join(ARTIFACT_DIR, `${name}_2x.png`) });
  }

  try {
    console.log("Capturing Home Screen...");
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500)); // wait for skeleton & animations
    await takeScreenshot('02_Home');

    console.log("Capturing Cards & Offers...");
    await page.goto('http://localhost:3000/cards', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));
    await takeScreenshot('05_Cards_Offers');

    console.log("Capturing Investments...");
    await page.goto('http://localhost:3000/invest', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));
    await takeScreenshot('06_Investments');

    console.log("Capturing Credit Score...");
    await page.goto('http://localhost:3000/credit', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));
    await takeScreenshot('07_Credit_Score');

    console.log("Capturing Assistant (Payment Flow)...");
    await page.goto('http://localhost:3000/assistant', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));
    await page.type('input[type="text"]', 'Pay 500 to Rohan');
    await page.click('button[type="submit"]');
    await new Promise(r => setTimeout(r, 2000)); // Wait for "I've set up the payment" and Confirm card
    await takeScreenshot('03_Assistant_Payment');

    console.log("Capturing Assistant (Smart Offers Flow)...");
    await page.goto('http://localhost:3000/assistant', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));
    await page.type('input[type="text"]', 'Which card should I use for a ₹3,000 flight booking?');
    await page.click('button[type="submit"]');
    await new Promise(r => setTimeout(r, 2000));
    await takeScreenshot('04_Assistant_SmartOffers');

    console.log("Capturing Onboarding...");
    await page.goto('http://localhost:3000/identity', { waitUntil: 'networkidle0' });
    // Wait for the inputs to be available (not loading)
    await new Promise(r => setTimeout(r, 500));
    const inputs = await page.$$('input[type="text"]');
    await inputs[0].type('123412341234');
    await inputs[1].type('ABCDE1234F');
    await page.click('button[type="submit"]');
    // Take screenshot IMMEDIATELY to capture mid-fetch loading state
    await new Promise(r => setTimeout(r, 100));
    await takeScreenshot('01_Onboarding_MidFetch');

  } catch (error) {
    console.error("Error capturing screenshots:", error);
  } finally {
    await browser.close();
  }
}

capture().then(() => console.log('Done capturing screenshots.'));
