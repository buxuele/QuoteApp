
// todo 把这里改为 读取一个文件， 数据库， 或是 io
const quotes = [
  "Fuck them! I have the balls to ask the question.",
  "一个好的发送机，能承受高压而不会爆炸。",
  "You just decide. The mind is significantly more powerful than we know.",
  "Quit smoking. This is the way.",
  "Remember, you are who you choose to be. Your decisions define you.",
  "I was talking to this woman I had an insane crush on and told her I smoked and she made a face. I stopped after that. It's been over ten years since I last smoked.",
  "Elon Musk:  Be useful to people.",
  "个人产出, 要大于个人消费。",
  "道理都是“空头支票”，改变才是“真金白银”。",
  "Fuck be normal."
];

document.getElementById('generateButton').addEventListener('click', generateRandomQuote);

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = quotes[randomIndex];
//  quoteElement.style.color = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate the first random quote on page load
generateRandomQuote();