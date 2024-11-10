
const OPEN_API_KEY = process.env.API_KEY;
console.log(OPEN_API_KEY);

let aiResponse = '';




export async function getMoodForOpenAI(mood: string): Promise<string> {

  await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPEN_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "user", "content": `You are a helpful assistant who is well versed with songs and the emotional response they convey to the listener. I need you to make me a playlist based on my current emotions. My current emotion is: ${mood}. Your response should only contain the titles and artists names for each song in the playlist.` }
      ],
      max_tokens: 100,
      temperature: 0.7
    })
  })
    .then(response => response.json())
    .then(data => {
      aiResponse = data.choices[0].message.content;
      console.log(aiResponse)
      return aiResponse;
    })
    .catch(error => console.error('Error:', error));

  return aiResponse;

}