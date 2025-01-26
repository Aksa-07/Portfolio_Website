document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');
  
    // Initial active tab and content setup
    tabLinks[0].classList.add('active-link');
    tabContents[0].classList.add('active-tab');
  
    tabLinks.forEach((tabLink, index) => {
      tabLink.addEventListener('click', function () {
        // Remove active state from all tabs
        tabLinks.forEach(link => link.classList.remove('active-link'));
        tabContents.forEach(content => content.classList.remove('active-tab'));
  
        // Add active state to clicked tab and its corresponding content
        tabLink.classList.add('active-link');
        tabContents[index].classList.add('active-tab');
      });
    });
  });
  