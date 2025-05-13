// // Event Handling 🎈
// document.getElementById('clickButton').addEventListener('click', () => {
//   alert('Button clicked!');
// });

// document.getElementById('hoverBox').addEventListener('mouseover', () => {
//   document.getElementById('hoverBox').textContent = 'Hovered!';
// });

// document.getElementById('keyPressInput').addEventListener('keypress', (e) => {
//   console.log(`Key pressed: ${e.key}`);
// });

// document.getElementById('secretButton').addEventListener('dblclick', () => {
//   alert('Secret action triggered!');
// });

// // Interactive Elements 🎮
// document.getElementById('colorChangeButton').addEventListener('click', () => {
//   document.getElementById('colorChangeButton').style.backgroundColor = 'purple';
//   document.getElementById('colorChangeButton').style.color = 'white';
// });

// // Image Gallery
// const images = [
//   'https://via.placeholder.com/150/FF0000',
//   'https://via.placeholder.com/150/00FF00',
//   'https://via.placeholder.com/150/0000FF',
// ];
// let currentImage = 0;

// document.getElementById('prevImage').addEventListener('click', () => {
//   currentImage = (currentImage - 1 + images.length) % images.length;
//   document.getElementById('galleryImage').src = images[currentImage];
// });

// document.getElementById('nextImage').addEventListener('click', () => {
//   currentImage = (currentImage + 1) % images.length;
//   document.getElementById('galleryImage').src = images[currentImage];
// });

// // Accordion
// document.querySelectorAll('.accordion-header').forEach((header, index) => {
//   header.addEventListener('click', () => {
//     const content = document.querySelectorAll('.accordion-content')[index];
//     content.classList.toggle('open');
//   });
// });

// // Form Validation 📋✅
// document.getElementById('validationForm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('emailInput').value;
//   const password = document.getElementById('passwordInput').value;

//   if (!email.includes('@')) {
//     document.getElementById('formFeedback').textContent = 'Invalid email format!';
//     return;
//   }

//   if (password.length < 8) {
//     document.getElementById('formFeedback').textContent = 'Password must be at least 8 characters!';
//     return;
//   }

//   document.getElementById('formFeedback').textContent = 'Form submitted successfully!';
// });

// document.getElementById('passwordInput').addEventListener('input', (e) => {
//   const feedback = e.target.value.length < 8 ? 'Password too short!' : 'Password looks good!';
//   document.getElementById('formFeedback').textContent = feedback;
// });

document.getElementById('clickButton').addEventListener('click', () => {
  alert('Button clicked!');
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').textContent = 'Hovered!';
});

document.getElementById('hoverBox').addEventListener('mouseout', () => {
  document.getElementById('hoverBox').textContent = 'Hover Over Me';
});

document.getElementById('keyPressInput').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

document.getElementById('secretButton').addEventListener('dblclick', () => {
  alert('Secret action triggered!');
});

document.getElementById('colorChangeButton').addEventListener('click', () => {
  const btn = document.getElementById('colorChangeButton');
  btn.style.backgroundColor = btn.style.backgroundColor === 'purple' ? '#007bff' : 'purple';
  btn.style.color = 'white';
});

const images = [
  'https://picsum.photos/seed/pic0/150',
  'https://picsum.photos/seed/pic1/150',
  'https://picsum.photos/seed/pic2/150',
  'https://picsum.photos/seed/pic3/150',
  'https://picsum.photos/seed/pic4/150',
  'https://picsum.photos/seed/pic5/150'
];
let currentImage = 0;

document.getElementById('galleryImage').src = images[currentImage];

document.getElementById('prevImage').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  document.getElementById('galleryImage').src = images[currentImage];
});

document.getElementById('nextImage').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentImage];
});

document.querySelectorAll('.accordion-header').forEach((header, index) => {
  header.addEventListener('click', () => {
    const content = document.querySelectorAll('.accordion-content')[index];
    content.classList.toggle('open');
  });
});

document.getElementById('validationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const feedback = document.getElementById('formFeedback');

  if (!email.includes('@')) {
    feedback.textContent = 'Invalid email format!';
    feedback.style.color = '#d9534f';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters!';
    feedback.style.color = '#d9534f';
    return;
  }

  feedback.textContent = 'Form submitted successfully!';
  feedback.style.color = 'green';
});

document.getElementById('passwordInput').addEventListener('input', (e) => {
  const feedback = e.target.value.length < 8 ? 'Password too short!' : 'Password looks good!';
  document.getElementById('formFeedback').textContent = feedback;
});