// 🎀 Ribbons
function createRibbon() {
  const ribbon = document.createElement("div");
  ribbon.classList.add("ribbon");
  ribbon.style.left = Math.random() * window.innerWidth + "px";
  ribbon.style.animationDuration = (3 + Math.random() * 5) + "s";
  ribbon.style.opacity = Math.random();
  document.querySelector(".ribbons").appendChild(ribbon);
  setTimeout(() => ribbon.remove(), 8000);
}
setInterval(createRibbon, 200);

// 🌟 SPA Pages Data
const pages = [
  {
    id: 1,
    name: "Oyindasola 💖",
    heading: "Happy Birthday 🎉",
    message: "January brought you into January brought more than just a new year… it made our paths cross. \nWhat started as a simple meeting became something I never expected; it became a friendship. \nFrom the very first conversations, there was something different… something genuine.And somehow, in such a short time because you just won't leave me alone😂, you became a friend. \nToday isn’t just about your birthday… it’s about celebrating the amazing person I'm lucky to call my friend 💕",
    song: "Happy Birthday  Evi Edna Ogholi  Official Video - Premier Records Limited.mp3",
    bg: "linear-gradient(135deg, #0d3c52, #d9dde7)"
  },
  {
    id: 2,
    name: "Oyindasola 💖",
    heading: "You Are Amazing 💖",
    message: "I don't have much to say on this page, I just want to let you know you make everything feel lighter just by being there and I hope you never lose that part of you. \nThe world is honestly a better place with you in it 🌹",
    song: "raindancecut.mp3",
    bg: "linear-gradient(135deg, #71b6b2, #fbc2eb)"
  },
  {
    id: 3,
    name: "Dorcas",
    heading: "Cheers to many more Years🥂🥳",
    message: "Our friendship may be new, but it means so much to me. \nThe random talks, the little moments, they all matter more than you probably realize (even though you act like a goat sometimes). \nAnd I truly hope this is just the beginning of many more memories together 💫",
    song: "simi birthday.mp3",
    bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
  },
  {
    id: 4,
    name: "Dorcas 💖",
    heading: "My Wishes For You ❤️",
    message: "On your special day, I just want you to know how appreciated you are.Not just today, but always.\n May this new chapter of your life bring you happiness, peace, growth, and everything your heart truly desires.\nYou deserve beautiful things, genuine smiles, and endless moments of joy.  \nHappy Birthday once again 🎂 I’m really glad I met you… and even more glad I get to call you my friend 💖",
    song: "its my birthday.mp3",
    bg: "linear-gradient(135deg, #ffecd2, #fcb69f)"
  }
];

// 🌟 SPA Logic
let currentPage = 0;
const container = document.querySelector(".page-container");
const music = document.getElementById("bgMusic");

function loadPage(index) {
  const page = pages[index];
  container.innerHTML = `
    <h1 class="name">${page.name}</h1>
    <h2 class="glow">${page.heading}</h2>
    <p class="handwriting">${page.message}</p>
    ${index < pages.length - 1 ? '<button id="nextBtn">Next ❤️</button>' : ''}
  `;
  document.body.style.background = page.bg;

  // Smooth music transition
  music.src = page.song;
  music.play().catch(() => {});

  if(index < pages.length - 1){
    document.getElementById("nextBtn").addEventListener("click", () => {
      currentPage++;
      loadPage(currentPage);
    });
  }
}

// Initialize first page
loadPage(currentPage);