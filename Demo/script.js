// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});