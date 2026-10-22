const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");

    menuButton.setAttribute("aria-expanded", String(!isHidden));
    menuButton.setAttribute(
      "aria-label",
      isHidden ? "Open navigation menu" : "Close navigation menu"
    );

    menuButton.textContent = isHidden ? "☰" : "✕";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    });
  });
}

const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

if (subscribeForm && emailInput && formMessage) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    formMessage.textContent =
      "Thank you! Your email is ready, but no subscription service is connected yet.";

    emailInput.value = "";
  });
}