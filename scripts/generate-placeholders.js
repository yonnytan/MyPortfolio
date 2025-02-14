const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

// Create directories if they don't exist
const mobileDir = path.join(__dirname, "../public/projects/mobile-apps");
const websiteDir = path.join(__dirname, "../public/projects/websites");

[mobileDir, websiteDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Image dimensions
const dimensions = {
  mobile: { width: 750, height: 1334 },
  website: { width: 1200, height: 800 },
};

// Define number of screens for each app
const mobileAppScreens = {
  1: 4, // App 1: 4 screens
  2: 6, // App 2: 6 screens
  3: 4, // App 3: 4 screens
};

// Define number of screens for each website
const websiteScreens = {
  portfolio: 4, // 4 screenshots for the portfolio website
};

// Save image function that checks if file exists first
function saveImageIfNotExists(buffer, filepath) {
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, buffer);
    return true;
  }
  return false;
}

// Generate mobile app placeholders
Object.entries(mobileAppScreens).forEach(([app, screenCount]) => {
  for (let screen = 1; screen <= screenCount; screen++) {
    const filepath = path.join(mobileDir, `mobile-app-${app}-${screen}.png`);
    const placeholderPath = path.join(
      mobileDir,
      `placeholder-mobile-app-${app}-${screen}.png`
    );

    // Skip if real image exists
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${filepath} as it already exists`);
      continue;
    }

    const canvas = createCanvas(
      dimensions.mobile.width,
      dimensions.mobile.height
    );
    const ctx = canvas.getContext("2d");

    // Set background
    ctx.fillStyle = "#2A2A2A";
    ctx.fillRect(0, 0, dimensions.mobile.width, dimensions.mobile.height);

    // Add gradient
    const gradient = ctx.createLinearGradient(
      0,
      0,
      dimensions.mobile.width,
      dimensions.mobile.height
    );
    gradient.addColorStop(0, "#3B82F6"); // blue-500
    gradient.addColorStop(1, "#7C3AED"); // violet-600
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.1;
    ctx.fillRect(0, 0, dimensions.mobile.width, dimensions.mobile.height);
    ctx.globalAlpha = 1;

    // Add text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      `Mobile App ${app}`,
      dimensions.mobile.width / 2,
      dimensions.mobile.height / 2 - 30
    );

    ctx.font = "36px Arial";
    ctx.fillText(
      `Screen ${screen} of ${screenCount}`,
      dimensions.mobile.width / 2,
      dimensions.mobile.height / 2 + 30
    );

    // Save as placeholder instead
    const buffer = canvas.toBuffer("image/png");
    saveImageIfNotExists(buffer, placeholderPath);
  }
});

// Generate website placeholders
let websiteCounter = 1;
Object.entries(websiteScreens).forEach(([name, screenCount]) => {
  for (let screen = 1; screen <= screenCount; screen++) {
    const filepath = path.join(websiteDir, `website-${websiteCounter}.png`);
    const placeholderPath = path.join(
      websiteDir,
      `placeholder-website-${websiteCounter}.png`
    );

    // Skip if real image exists
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${filepath} as it already exists`);
      continue;
    }

    const canvas = createCanvas(
      dimensions.website.width,
      dimensions.website.height
    );
    const ctx = canvas.getContext("2d");

    // Set background
    ctx.fillStyle = "#2A2A2A";
    ctx.fillRect(0, 0, dimensions.website.width, dimensions.website.height);

    // Add gradient
    const gradient = ctx.createLinearGradient(
      0,
      0,
      dimensions.website.width,
      dimensions.website.height
    );
    gradient.addColorStop(0, "#3B82F6"); // blue-500
    gradient.addColorStop(1, "#7C3AED"); // violet-600
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.1;
    ctx.fillRect(0, 0, dimensions.website.width, dimensions.website.height);
    ctx.globalAlpha = 1;

    // Add text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      "Portfolio Website",
      dimensions.website.width / 2,
      dimensions.website.height / 2 - 30
    );

    ctx.font = "36px Arial";
    ctx.fillText(
      `Screenshot ${screen} of ${screenCount}`,
      dimensions.website.width / 2,
      dimensions.website.height / 2 + 30
    );

    // Save as placeholder instead
    const buffer = canvas.toBuffer("image/png");
    saveImageIfNotExists(buffer, placeholderPath);
    websiteCounter++;
  }
});

console.log("Placeholder images generated successfully!");
