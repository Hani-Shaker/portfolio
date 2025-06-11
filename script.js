// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize navbar scroll effect
    initNavbar();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize reveal on scroll animations
    initRevealAnimations();
    
    // Initialize tab functionality
    initTabs();
    
    // Initialize project filtering
    initProjectFilters();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll to top button
    initScrollToTop();
  });
  
  // Project data
  const projectsData = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://coffee-shopx.netlify.app/",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "furniture-us",
      description: "website for ",
      image: "./img/pr1.png",
      tags: ["HTML&CSS", "CSS3", "HTML5"],
      demoUrl: "https://furniture-us.netlify.app/",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["Vue.js", "Firebase", "Vuex"],
      demoUrl: "https://cake-shopx.netlify.app/", 
      codeUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts based on user location.",
      image: "https://images.unsplash.com/photo-1522043436628-a4bd7142ad31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["JavaScript", "API", "CSS"],
      demoUrl: "https://hairdresser-0.netlify.app/",
      codeUrl: "#",
    },
    {
      title: "Recipe Finder App",
      description: "An application that allows users to search for recipes based on ingredients they have.",
      image: "",
      tags: ["React", "API Integration", "Styled Components"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["Socket.io", "Express", "MongoDB", "React"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
  ];
  
  // Initialize navbar scroll effect
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Initialize mobile menu
  function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      
      if (mobileMenu.classList.contains('show')) {
        menuIcon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      } else {
        menuIcon.innerHTML = `
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      }
    });
    
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        menuIcon.innerHTML = `
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      });
    });
  }
  
  // Initialize reveal animations on scroll
  function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Also trigger on initial load
    revealOnScroll();
  }
  
  // Initialize tabs for skills section
  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Hide all tab panels
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Show the corresponding panel
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`tab-${tabId}`).classList.add('active');
      });
    });
  }
  
  // Initialize project filtering and card creation
  function initProjectFilters() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-button');
    let visibleProjects = 3;
    let currentFilter = 'All';
    
    // Create project cards and add to the grid
    function renderProjects() {
      projectsGrid.innerHTML = '';
      
      const filteredProjects = currentFilter === 'All' 
        ? projectsData 
        : projectsData.filter(project => project.tags.includes(currentFilter));
      
      const projectsToShow = filteredProjects.slice(0, visibleProjects);
      
      projectsToShow.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
      });
      
      // Show or hide 'Show More' button
      const loadMoreButton = document.getElementById('load-more');
      if (filteredProjects.length <= visibleProjects) {
        loadMoreButton.style.display = 'none';
      } else {
        loadMoreButton.style.display = 'inline-flex';
      }
    }
    
    // Create a project card element
    function createProjectCard(project) {
      const card = document.createElement('div');
      card.className = 'project-card reveal active';
      
      let tagsHTML = '';
      project.tags.forEach(tag => {
        tagsHTML += `<span class="project-tag">${tag}</span>`;
      });
      
      card.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
          ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>
        <div class="project-footer">
          ${project.codeUrl ? 
            `<a href="${project.codeUrl}" class="project-button project-button-outline" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Code
            </a>` 
          : ''}
          
          ${project.demoUrl ? 
            `<a href="${project.demoUrl}" class="project-button project-button-primary" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Demo
            </a>`
          : ''}
        </div>
      `;
      
      return card;
    }
    
    // Set up filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        currentFilter = button.getAttribute('data-filter');
        visibleProjects = 3; // Reset to initial count
        renderProjects();
        
        // Trigger animation check
        setTimeout(() => {
          initRevealAnimations();
        }, 100);
      });
    });
    
    // Set up 'Show More' button
    document.getElementById('load-more').addEventListener('click', () => {
      visibleProjects += 3;
      renderProjects();
      
      // Trigger animation check
      setTimeout(() => {
        initRevealAnimations();
      }, 100);
    });
    
    // Initial render
    renderProjects();
  }
  
  // Initialize contact form
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server here
        const formData = {
          name: contactForm.name.value,
          email: contactForm.email.value,
          subject: contactForm.subject.value,
          message: contactForm.message.value
        };
        
        console.log('Form submitted:', formData);
        
        // Show success message
        toast.classList.add('show');
        
        // Hide toast after 5 seconds
        setTimeout(() => {
          toast.classList.remove('show');
        }, 5000);
        
        // Reset form
        contactForm.reset();
      });
    }
  }
  
  // Initialize scroll to top button
  function initScrollToTop() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  