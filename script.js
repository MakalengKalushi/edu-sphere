function toggleMenu() {
    const nav = document.getElementById("mobile-nav");
    nav.classList.toggle("hidden");
}


function toggleTopics(button) {
    const topics = button.nextElementSibling;
    topics.classList.toggle("hidden");
    button.textContent = topics.classList.contains("hidden") ? "Expand" : "Collapse";
}