const learnMoreButton = document.getElementById('learnMore');

if (learnMoreButton) {
  learnMoreButton.addEventListener('click', () => {
    learnMoreButton.textContent = 'Explore the Studio';
  });
}
