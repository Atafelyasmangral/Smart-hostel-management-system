document.addEventListener('DOMContentLoaded', function () {
  const dropdownContainers = document.querySelectorAll('.dropdown-container');

  dropdownContainers.forEach(container => {
    const button = container.querySelector('button');
    const dropdown = container.querySelector('.dropdown');

    button.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevents the click from bubbling to document
      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.style.display = 'none';
      });

      // Toggle current dropdown
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Hide dropdowns when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  });
});
// Function to send Mobile OTP
function sendMobileOTP() {
  const mobile = document.getElementById('mobile').value;
  if (mobile) {
    alert(`OTP sent to mobile number: ${mobile}`);
    // Implement actual OTP sending logic here
  } else {
    alert('Please enter a valid mobile number.');
  }
}

// Function to send Email OTP
function sendEmailOTP() {
  const email = document.getElementById('email').value;
  if (email) {
    alert(`OTP sent to email: ${email}`);
    // Implement actual OTP sending logic here
  } else {
    alert('Please enter a valid email address.');
  }
}

// Function to generate CAPTCHA
function generateCaptcha() {
  const captchaCode = Math.random().toString(36).substring(2, 8);
  document.getElementById('captchaCode').textContent = captchaCode;
}

// Validate CAPTCHA on form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const enteredCaptcha = document.getElementById('captchaInput').value;
  const actualCaptcha = document.getElementById('captchaCode').textContent;
  if (enteredCaptcha === actualCaptcha) {
    alert('Login successful!');
    // Implement actual login logic here
  } else {
    alert('Incorrect CAPTCHA. Please try again.');
    generateCaptcha();
  }
});

// Initialize CAPTCHA on page load
window.onload = function() {
  if (document.getElementById('captchaCode')) {
    generateCaptcha();
  }
};
function toggleSidebarDropdown() {
  const dropdown = document.getElementById('sidebarDropdown');
  dropdown.classList.toggle('show');
}
// === Modal Login/Register Logic ===

// Open the modal
function openModal() {
  document.getElementById('authModal').style.display = 'block';
  generateCaptcha(); // Refresh CAPTCHA on open
}

// Close the modal
function closeModal() {
  document.getElementById('authModal').style.display = 'none';
}

// Switch between Login and Register tabs
function switchTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');

  // Show selected form
  document.querySelectorAll('.form-container').forEach(form => form.style.display = 'none');
  document.getElementById(`${tabName}Form`).style.display = 'block';
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('authModal');
  if (event.target == modal) {
    closeModal();
  }
};
document.getElementById('openModalBtn').addEventListener('click', openModal);
// Open the modal
document.getElementById('openModalBtn').addEventListener('click', function () {
  document.getElementById('authModal').style.display = 'block';
  generateCaptcha(); // Ensure captcha refreshes
});

// Close modal
function closeModal() {
  document.getElementById('authModal').style.display = 'none';
}

// Switch Login/Register tabs
function switchTab(tabName) {
  // Remove active class from all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  // Hide all form containers
  document.querySelectorAll('.form-container').forEach(container => {
    container.style.display = 'none';
  });
  // Show the selected form
  document.getElementById(`${tabName}Form`).style.display = 'block';
  // Activate the clicked tab
  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
}

// Close modal when clicking outside it
window.onclick = function (event) {
  const modal = document.getElementById('authModal');
  if (event.target === modal) {
    closeModal();
  }
};
