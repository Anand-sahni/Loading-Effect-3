// made for https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/

// goal: mock loading animation of markup

const allLines = Array.from(document.querySelectorAll('.line'));

const ANIMATION_OFFSET = 50;
allLines.forEach((line, i) => {
  line.style.animationDelay = `${ANIMATION_OFFSET * i}ms`;
  line.style.animationDuration = `${ANIMATION_OFFSET * allLines.length}ms`;
});
