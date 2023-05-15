const lyrics = [
  "i'm no economist but i could tell you something's wrong with this trade-off",
  "i see an angel in my dreams",
	"a single teardrop falls from my eyes",
	"hoping for a star to come again, remove us",
	"lock our thoughts and take them somewhere else",
];

function generateLyric() {
  const randomLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
  document.getElementById('lyric').textContent = randomLyric;
}

window.onload = generateLyric;
