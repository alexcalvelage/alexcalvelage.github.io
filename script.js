document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('[data-type="enlarge"]');
  
    projectItems.forEach(item => {
      item.addEventListener('click', function() {
        // Toggle 'enlarged' class on the clicked item
        this.classList.toggle('enlarged');
      });
    });
  });
  