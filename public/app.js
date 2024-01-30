import OpenAIApi from "openai";

const openai = new OpenAIApi ({
    organization: "org-t8Gi5likkAXs877hBJ16kfQO",
    apiKey: "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",
})

async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "testing api." }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  }
  
main();
