var quoteArea = document.getElementById("quoteArea");
var quoteAuth = document.getElementById("quoteAuth");
var myBtn = document.getElementById("myBtn");
var quotes = [
  {
    qoute: "So many books, so little time.",
    auth: "Frank Zappa",
  },
  {
    qoute:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    auth: "Albert Einstein",
  },
  {
    qoute:
      "In three words I can sum up everything I've learned about life: it goes on.",
    auth: "Robert Frost",
  },
  {
    qoute:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    auth: "Mahatma Gandhi",
  },
  {
    qoute: "A friend is someone who knows all about you and still loves you.",
    auth: "Elbert Hubbard",
  },
  {
    qoute:
      "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    auth: "John Green, ",
  },
  {
    qoute: "Love is like the wind, you can't see it but you can feel it.",
    auth: "Nicholas Sparks",
  },
  {
    qoute: "If you can make a woman laugh, you can make her do anything.",
    auth: "Marilyn Monroe",
  },
  {
    qoute:
      "Count your age by friends, not years. Count your life by smiles, not tears.",
    auth: "John Lennon",
  },
  {
    qoute:
      "Happiness is not something ready made. It comes from your own actions.",
    auth: "Dalai Lama XIV",
  },
];
myBtn.onclick = function () {
  var randomQoute = quotes[Math.floor(Math.random() * quotes.length)];
  quoteArea.innerHTML = `
    <span class="text-warning">“</span>${randomQoute.qoute}<span class="text-warning">”</span>
    `;
  quoteAuth.innerHTML = `
     <span class="text-white">- </span>${randomQoute.auth}<span class="text-white"> -</span>
    `;
};
