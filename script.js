const button = document.getElementById('celebrateButton');
const card = document.querySelector('.card');

button.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});
