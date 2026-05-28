import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:
    import.meta.env
      .VITE_OPENAI_API_KEY,

  dangerouslyAllowBrowser: true,
});

export async function editText(
  text: string,
  prompt: string
) {

  const response =
    await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",

          content:
            `
            You are a document editor.
            Only modify the given text
            based on the instruction.
            `,
        },

        {
          role: "user",

          content:
            `
            Original Text:
            ${text}

            Instruction:
            ${prompt}
            `,
        },
      ],
    });

  return (
    response.choices[0]
      .message.content || ""
  );
}