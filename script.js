const button = document.getElementById('celebrateButton');
const cakeContainer = document.getElementById('cakeContainer');

button.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  cakeContainer.classList.remove('hidden');
});
