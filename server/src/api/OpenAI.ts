export async function getMoodForOpenAI(mood: string): Promise<string> {
  const OPEN_API_KEY = process.env.API_KEY;
  let aiResponse = '';

  await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPEN_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "user", "content": `You are a helpful assistant who is well versed with songs and the emotional response they convey to the listener. Generate 100 songs that convey the emotion ${mood}. Your response should only contain the titles and artists names of the 15 randomly selected songs from the 100 generated, and nothing else. Write all of the songs in a single line, separated by a | symbol, and remove all quotation marks from your response.` }
      ],
      max_tokens: 250,
      temperature: 0.7
    })
  })
    .then(async response => await response.json())
    .then(async data => {
      aiResponse = await data.choices[0].message.content;
      return aiResponse;
    })
    .catch(error => console.error('Error:', error));

  return aiResponse;

}