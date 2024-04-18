function setupHeader() {
    const pageName = document.title.toLowerCase().replace(/\s/g, '');
  
    const headerAElement = document.querySelector(`.nav_link_${pageName}`);
    headerAElement?.classList.add('act');
    
  }
 

  document.addEventListener('DOMContentLoaded', setupHeader);