window.onload = () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 2500);
};

let isLight = false; // DARK MODE by default

// Set initial body class and toggle button icon on load
document.body.classList.remove('light-mode');
document.body.classList.add('dark-mode');
document.getElementById('modeToggle').textContent = '🌞'; // sun icon means click to go light

document.getElementById('modeToggle').addEventListener('click', () => {
  if (isLight) {
    // Switch to dark mode
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.getElementById('modeToggle').textContent = '🌞';
  } else {
    // Switch to light mode
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.getElementById('modeToggle').textContent = '🌙';
  }
  isLight = !isLight;
});

function insertCard() {
  const keycard = document.getElementById('keycard');
  const menuCard = document.getElementById('menuCard');

  keycard.classList.add('inserted');

  setTimeout(() => {
    keycard.style.display = 'none';
    menuCard.style.display = 'flex';
    menuCard.classList.add('show');
  }, 1700);
}

function backToKeycard() {
  const keycard = document.getElementById('keycard');
  const menuCard = document.getElementById('menuCard');

  menuCard.classList.remove('show');
  menuCard.classList.add('backing');

  menuCard.addEventListener(
    'animationend',
    function onMenuBack() {
      menuCard.style.display = 'none';
      menuCard.classList.remove('backing');

      keycard.style.display = 'block';
      keycard.style.opacity = '1';

      // Remove inserted class before slideOut animation
      keycard.classList.remove('inserted');
      keycard.classList.add('slideOut');

      keycard.addEventListener(
        'animationend',
        function onKeycardSlideOut() {
          keycard.classList.remove('slideOut');
          keycard.style.transform = 'translate(-50%, 0) scale(1)';

          keycard.removeEventListener('animationend', onKeycardSlideOut);
        },
        { once: true }
      );

      menuCard.removeEventListener('animationend', onMenuBack);
    },
    { once: true }
  );
}

function openSection(id) {
  document.querySelectorAll('.section').forEach((section) => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function closeSection() {
  document.querySelectorAll('.section').forEach((section) => {
    section.classList.remove('active');
  });
}
