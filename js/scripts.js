// scripts.js

// Fade in page when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Allow a thought to be "selected" by click
document.querySelectorAll('.thought').forEach(thought => {
  thought.addEventListener('click', () => {
    thought.classList.toggle('selected');
});


// Optional: Add typewriter effect if needed in future
// function typeWriterEffect(element, text, speed = 35) {
//   let i = 0;
//   function type() {
//     if (i < text.length) {
//       element.textContent += text.charAt(i);
//       i++;
//       setTimeout(type, speed);
//     }
//   }
//   type();
// }
