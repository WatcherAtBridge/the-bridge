// scripts.js

// Fade in page when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
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
