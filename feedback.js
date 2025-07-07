document.querySelector('.feedback-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
  const feedback = document.querySelector('textarea').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !feedback) {
    alert('Please fill in all fields.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // You can replace this with actual submission logic
  alert('Thank you for your feedback!');
});
