const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "",
  baseURL: "https://api.aimlapi.com",
});

//mistralai/Mistral-7B-Instruct-v0.2




function calculate () {
(async () => {
  const chatCompletion = await openai.chat.completions.create({
    model: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
    messages: [
      { role: "system", content: "You are a high school math teacher be helpful and accurate, give me step by step instructions on how to solve the problem I gave you, dont say anything unnessesary, asnwer to me in finnish" },
      { role: "user", content: "How can I solve this 2 + 4x = 35" }
    ],
    temperature: 0.2,
    max_tokens: 34,
  });
  console.log(chatCompletion.choices[0].message.content);
})();
}


// const input = document.getElementById("input");
// const nappi = document.getElementById("button1");

// nappi.addEventListener("click", function() {
// try {
//     calculate()
//     console.log("code run started")
// } catch (error) {
//    console.error('Code run failed')
// }

// })

calculate()

