// Fade in page when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  // Allow a thought to be "selected" by click
  document.querySelectorAll('.thought').forEach(thought => {
    thought.addEventListener('click', () => {
      thought.classList.toggle('selected');
    });
  });

  // Scroll-to-top button visibility
  const topButton = document.getElementById('scrollTop');
  const nav = document.getElementById('mainNav');

  function isNavOutOfView() {
    const rect = nav.getBoundingClientRect();
    return rect.bottom < 0;
  }

  function handleScroll() {
    if (isNavOutOfView()) {
      topButton.classList.add('show');
    } else {
      topButton.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleScroll);

  topButton?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
