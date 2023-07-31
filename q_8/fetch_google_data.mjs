import fetch from 'node-fetch';

async function fetchGoogleHomepage() {
  try {
    const url = 'https://www.google.com';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data from Google homepage');
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

async function main() {
  const googleData = await fetchGoogleHomepage();

  if (googleData) {
    console.log('Google Homepage Data:', googleData);
  } else {
    console.log('Failed to fetch data from Google homepage.');
  }
}

main();
