document.addEventListener('DOMContentLoaded', function () {
    
  
    const checkbox = document.querySelector('.gallery_ckeckbox');
    const button = document.querySelector('.gallery_button');
    const gallery = document.querySelector('.gallery-hidden');
  
    checkbox.addEventListener('click', function () {
      button.style.display = 'none';
      gallery.style.display = 'grid';
    });
  });