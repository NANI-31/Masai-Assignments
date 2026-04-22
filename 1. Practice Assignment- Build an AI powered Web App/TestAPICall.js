async function testAPI() {
  const API_KEY = '';
  const MODEL = 'gemini-2.5-flash';

  console.log(`Testing API with working model: ${MODEL}...`);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Say "System Operational"!' }] }]
        })
      }
    );

    if (response.status === 429) {
      console.error(
        '\x1b[33m%s\x1b[0m',
        'Rate Limit Hit (429): Daily quota exhausted for this model. Try a different API key or wait 24 hours.'
      );
      return;
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`API Error (${response.status}):`, errorData.error?.message || 'Unknown error');
      return;
    }

    const data = await response.json();
    console.log('\x1b[32m%s\x1b[0m', 'SUCCESS! Response Received:');
    console.log(data.candidates?.[0]?.content?.parts?.[0]?.text || 'No content received.');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'SYSTEM ERROR:', error.message);
  }
}

testAPI();
