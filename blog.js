const posts = document.querySelectorAll('.post');

function revealOnScroll() {
  posts.forEach(post => {
    const rect = post.getBoundingClientRect();
    const isVisible = window.getComputedStyle(post).display !== "none";
    if (rect.top < window.innerHeight - 100 && isVisible) {
      post.classList.add('reveal-visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.querySelectorAll('input[name="filter"]').forEach(input => {
  input.addEventListener('change', () => {
    posts.forEach(post => post.classList.remove('reveal-visible'));
    revealOnScroll();
  });
});