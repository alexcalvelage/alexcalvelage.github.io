document.addEventListener('DOMContentLoaded', function() {
  const projectItems = document.querySelectorAll('[data-type="enlarge"]');
  let enlargedItem = null;

  projectItems.forEach(item => {
      item.addEventListener('click', function(event) {
          event.stopPropagation(); // Prevent the click event from propagating to the document
          if (enlargedItem && enlargedItem !== this) {
              enlargedItem.classList.remove('enlarged');
          }
          this.classList.toggle('enlarged');
          enlargedItem = this.classList.contains('enlarged') ? this : null;
      });
  });

  document.addEventListener('click', function() {
      if (enlargedItem) {
          enlargedItem.classList.remove('enlarged');
          enlargedItem = null;
      }
  });
});
