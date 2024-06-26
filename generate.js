const crypto = require('crypto');
const fs = require('fs');

// Function to generate a 64-bit random key in hexadecimal format
const generate64BitHexKey = () => crypto.randomBytes(8).toString('hex');

// Sample values for other environment variables
const sampleEnv = {
  AUTH_REFRESH_TOKEN_SECRET: generate64BitHexKey(),
  AUTH_REFRESH_TOKEN_EXPIRY: '7d',
  AUTH_ACCESS_TOKEN_SECRET: generate64BitHexKey(),
  AUTH_ACCESS_TOKEN_EXPIRY: '15m',
  AUTH_EMAIL_USERNAME: 'eduventure.team1@gmail.com',
  AUTH_EMAIL_PASSWORD: 'Pass1234#',
  EMAIL_FROM: 'no-reply@example.com',
  RESET_PASSWORD_TOKEN_EXPIRY_MINS: '30',
};

// Generate .env file content
const envContent = Object.entries(sampleEnv)
  .map(([key, value]) => `${key}=${value}`)
  .join('\n');

// Write the .env file
fs.writeFileSync('.env', envContent);

console.log('.env file created with sample data:');
console.log(envContent);
