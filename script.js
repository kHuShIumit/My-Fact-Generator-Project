// script.js
const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I'm learning to play the guitar in my free time."
];

const factDisplay = document.getElementById('fact-display');
const newFactBtn = document.getElementById('new-fact-btn');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function displayNewFact() {
    factDisplay.textContent = getRandomFact();
}

newFactBtn.addEventListener('click', displayNewFact);
displayNewFact();
