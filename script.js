const btn_populate = document.querySelector(".btn-populate");
const btn_reset = document.querySelector(".btn-reset");
const quoteBox = document.querySelector(".quote-box");
const quoteText = document.querySelector(".quote-text");

let hasBrokenIce = false;

btn_populate.addEventListener("click", () => {
  if (hasBrokenIce) return;

  const randomIndex = Math.floor(Math.random() * icebreakerSamples.length);
  const randomIcebreaker = icebreakerSamples[randomIndex].icebreaker;

  quoteText.textContent = randomIcebreaker;
  quoteBox.style.backgroundImage = "none";

  hasBrokenIce = true;
  btn_populate.disabled = true;
  btn_reset.disabled = false; // Enable Refreeze
});

btn_reset.addEventListener("click", () => {
  quoteText.textContent = "";
  quoteBox.style.backgroundImage = 'url("app_images/frozen_ice.jpg")';

  hasBrokenIce = false;
  btn_populate.disabled = false;
  btn_reset.disabled = true; // Disable Refreeze again
});

const icebreakerSamples = [
  {
    id: 1,
    icebreaker: "What's your favorite way to spend a weekend?",
  },
  {
    id: 2,
    icebreaker:
      "If you could have dinner with any famous person (dead or alive), who would it be?",
  },
  {
    id: 3,
    icebreaker: "What's a fun fact most people don't know about you?",
  },
  {
    id: 4,
    icebreaker: "If you could instantly learn any skill, what would it be?",
  },
  {
    id: 5,
    icebreaker: "What was your first job?",
  },
  {
    id: 6,
    icebreaker: "What's your go-to comfort food?",
  },
  {
    id: 7,
    icebreaker: "What's the best vacation you've ever been on?",
  },
  {
    id: 8,
    icebreaker: "What's your favorite movie or TV show right now?",
  },
  {
    id: 9,
    icebreaker:
      "If you had to delete all but three apps from your phone, which would you keep?",
  },
  {
    id: 10,
    icebreaker: "Are you more of a morning person or a night owl?",
  },
  {
    id: 11,
    icebreaker: "What's your favorite thing about where you live?",
  },
  {
    id: 12,
    icebreaker:
      "If you could time travel, would you go to the past or the future?",
  },
  {
    id: 13,
    icebreaker: "What's a book you'd recommend to everyone?",
  },
  {
    id: 14,
    icebreaker: "What's one thing on your bucket list?",
  },
  {
    id: 15,
    icebreaker:
      "If you could have any animal (real or fictional) as a pet, what would it be?",
  },
  {
    id: 16,
    icebreaker: "What was your favorite cartoon or show as a kid?",
  },
  {
    id: 17,
    icebreaker: "What's your dream travel destination?",
  },
  {
    id: 18,
    icebreaker:
      "Would you rather always be 10 minutes late or 20 minutes early?",
  },
  {
    id: 19,
    icebreaker: "What's your hidden talent (or something you wish was)?",
  },
  {
    id: 20,
    icebreaker: "If your life were a movie, what would the title be?",
  },
  {
    id: 21,
    icebreaker: "What's the most unusual food you've ever tried?",
  },
  {
    id: 22,
    icebreaker:
      "If you won the lottery tomorrow, what's the first thing you'd do?",
  },
  {
    id: 23,
    icebreaker: "What's a hobby or activity you've always wanted to try?",
  },
  {
    id: 24,
    icebreaker: "What's the last show you binge-watched?",
  },
  {
    id: 25,
    icebreaker: "Do you prefer mountains, beaches, or cities for vacations?",
  },
  {
    id: 26,
    icebreaker: "What's one item you can't live without?",
  },
  {
    id: 27,
    icebreaker: "If you had to teach a class on one thing, what would it be?",
  },
  {
    id: 28,
    icebreaker: "What's a song that always gets you pumped up?",
  },
  {
    id: 29,
    icebreaker: "Do you believe in ghosts or aliens?",
  },
  {
    id: 30,
    icebreaker: "What's your go-to karaoke song?",
  },
  {
    id: 31,
    icebreaker: "What's your favorite holiday tradition?",
  },
  {
    id: 32,
    icebreaker:
      "If you could swap lives with someone for a day, who would it be?",
  },
  {
    id: 33,
    icebreaker: "What's something you were really into as a kid?",
  },
  {
    id: 34,
    icebreaker: "What's your favorite way to unwind after a long day?",
  },
  {
    id: 35,
    icebreaker: "Have you ever had a surprising or funny misunderstanding?",
  },
  {
    id: 36,
    icebreaker: "What's one thing that instantly makes you smile?",
  },
  {
    id: 37,
    icebreaker:
      "Would you rather explore outer space or the bottom of the ocean?",
  },
  {
    id: 38,
    icebreaker: "What's the best piece of advice you've ever received?",
  },
  {
    id: 39,
    icebreaker: "Do you prefer books, movies, or podcasts — and why?",
  },
  {
    id: 40,
    icebreaker:
      "What's something you're proud of but rarely get to talk about?",
  },
  {
    id: 41,
    icebreaker: "What's your favorite type of weather?",
  },
  {
    id: 42,
    icebreaker:
      "Have you ever had a really memorable encounter with a stranger?",
  },
  {
    id: 43,
    icebreaker: "What's a fictional world you'd love to live in?",
  },
  {
    id: 44,
    icebreaker:
      "If you could instantly master any language, which one would you choose?",
  },
  {
    id: 45,
    icebreaker:
      "What's something you've done that you never thought you could?",
  },
  {
    id: 46,
    icebreaker: "Do you have any quirky routines or habits?",
  },
  {
    id: 47,
    icebreaker: "What's your favorite thing to do on a rainy day?",
  },
  {
    id: 48,
    icebreaker: "If you could rename yourself, what name would you pick?",
  },
  {
    id: 49,
    icebreaker: "Have you ever had a travel mishap or funny vacation story?",
  },
  {
    id: 50,
    icebreaker: "What's one piece of technology you couldn't live without?",
  },
];
