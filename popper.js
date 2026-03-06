
  const toggleBtn = document.querySelector('.toggle_btn');
  const navMenu = document.querySelector('nav ul');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.querySelector('i').classList.toggle('fa-bars');
    toggleBtn.querySelector('i').classList.toggle('fa-xmark');
  });


