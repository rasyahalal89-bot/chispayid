// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    document.querySelector("nav").classList.remove("active");
  });
});

// Redirect to WhatsApp for Product Purchase
function redirectToWA(product) {
  // Ganti nomor WhatsApp Anda di sini
  const phoneNumber = "089657905511";

  // Ganti pesan default sesuai kebutuhan
  const message = `Halo, saya ingin membeli ${product} dari Chispay.id. Mohon info lebih lanjut.`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Redirect to WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}

// Form Submission
document
  .querySelector(".kontak-form form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector("textarea").value;

    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(
      `Terima kasih ${name}, pesan Anda telah terkirim! Kami akan segera menghubungi Anda melalui email ${email}.`
    );

    // Reset form
    this.reset();
  });

// Sticky Header on Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
