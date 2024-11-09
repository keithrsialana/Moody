import OpenAI from "openai";
const openai = new OpenAI();


async function getMoodForOpenAI(mood: string): Promise<string> {

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant who is well versed with songs and the emotional response they convey to the listener." },
      {
        role: "user",
        content: `I need you to make me a playlist based on my current emotions. My current emotion is: ${mood}`,
      },
    ],
  });

  console.log(completion.choices[0].message);
  try {
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mood
      }),
    });



    if (response.ok) return true;
    else return false;
  } catch (error) {
    throw new Error(
      "Something went wrong with validating the login information"
    );
  }
}

