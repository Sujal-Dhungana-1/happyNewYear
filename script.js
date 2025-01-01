const button = document.getElementById('celebrateButton');
const cakeContainer = document.getElementById('cakeContainer');

button.addEventListener('click', () => {
  // Trigger the confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Remove the 'hidden' class from the cake container to show it
  cakeContainer.classList.remove('hidden');
});
