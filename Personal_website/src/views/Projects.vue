<template>
    <div class="w-full bg-gray-900 text-white font-mono py-20 relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      <!-- Section header -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 mb-12">
        <div class="text-green-400 mb-2 flex items-center">
          <span class="mr-2">$</span>
          <span class="typing-animation">ls -la ~/projects</span>
        </div>
        <h2 class="text-4xl font-bold mb-4 text-gray-100">Projects</h2>
        <p class="text-gray-400 max-w-2xl mb-8">
          A collection of my latest work spanning web development, data analysis, and machine learning.
        </p>
      </div>
      
      <!-- Project carousel -->
      <div class="relative z-10 carousel-container">
        <!-- Navigation arrows -->
        <button 
          @click="scrollProjects('left')" 
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 bg-opacity-70 rounded-full p-3 text-white hover:bg-opacity-100 transition-all focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button 
          @click="scrollProjects('right')" 
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 bg-opacity-70 rounded-full p-3 text-white hover:bg-opacity-100 transition-all focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <!-- Project cards wrapper -->
        <div class="carousel-track-container max-w-6xl mx-auto overflow-hidden px-6">
          <div 
            ref="carouselTrack" 
            class="carousel-track flex transition-transform"
            @mouseenter="pauseAutoScroll"
            @mouseleave="resumeAutoScroll"
          >
            <!-- Using ProjectCard component for each project -->
            <ProjectCard 
              v-for="(project, index) in projects" 
              :key="`original-${index}`"
              :title="project.title"
              :description="project.description"
              :category="project.category"
              :technologies="project.technologies"
              :link="project.link"
              :image="project.image"
            />
            
            <!-- Duplicate first two projects for infinite scroll effect -->
            <ProjectCard 
              v-for="(project, index) in projects.slice(0, 2)" 
              :key="`duplicate-${index}`"
              :title="project.title"
              :description="project.description"
              :category="project.category"
              :technologies="project.technologies"
              :link="project.link"
              :image="project.image"
            />
          </div>
        </div>
        
        <!-- Indicators -->
        <div class="flex justify-center mt-8 gap-2">
          <button 
            v-for="index in projects.length" 
            :key="index"
            @click="scrollToProject(index - 1)"
            class="w-3 h-3 rounded-full"
            :class="currentProjectIndex === index - 1 ? 'bg-green-400' : 'bg-gray-600 hover:bg-gray-500'"
          ></button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from '@/components/ProjectCard.vue'
  
  export default {
    name: 'ProjectsSection',
    components: {
      ProjectCard
    },
    data() {
      return {
        currentProjectIndex: 0,
        autoScrollInterval: null,
        scrollAmount: 0,
        cardWidth: 0,
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
        projects: [
          {
            title: 'FitSync',
            description: 'A comprehensive fitness tracking application with personalized workout plans and progress analytics.',
            category: 'Web Dev',
            technologies: [
              { name: 'React Native', color: 'text-blue-300' },
              { name: 'Node.js', color: 'text-green-300' },
              { name: 'Supabase', color: 'text-red-300' }
            ],
            link: '#',
            image: '/images/projects/FitSync.png'
          },
          {
            title: 'Muhamaddiyah Minimart',
            description: 'A feature-rich e-commerce platform with secure payment processing and inventory management.',
            category: 'Web Dev',
            technologies: [
              { name: 'React.js', color: 'text-blue-300' },
              { name: 'Firebase', color: 'text-red-300' },
              { name: 'Javascript', color: 'text-yellow-300' }
            ],
            link: '#',
            image: '/images/projects/e-commerce.png'
          },
          {
            title: 'Hive',
            description: 'A social networking platform designed specifically for university students and young adults to connect and form meaningful relations.',
            category: 'Web Dev',
            technologies: [
              { name: 'Vue.js', color: 'text-green-300' },
              { name: 'Firebase', color: 'text-red-300' },
              { name: 'Javascript', color: 'text-yellow-300' }
            ],
            link: '#',
            image: '/images/projects/Hive.png'
          },
          {
            title: 'Beijing Housing Analysis',
            description: 'A comprehensive data analysis of Beijing housing prices, identifying key factors affecting property values.',
            category: 'Data Analysis',
            technologies: [
              { name: 'RStudio', color: 'text-blue-300' },
              { name: 'SQL', color: 'text-yellow-300' },
              { name: 'Tableau', color: 'text-blue-200' }
            ],
            link: '#',
            image: '/images/projects/BHP.png'
          },
          {
            title: 'FlickFinder',
            description: 'A movie recommender system using collaborative filtering and content-based algorithms to deliver personalized suggestions.',
            category: 'Machine Learning',
            technologies: [
              { name: 'Python', color: 'text-blue-300' },
              { name: 'Sci-Kit Learn', color: 'text-yellow-300' },
              { name: 'Pandas', color: 'text-green-300' }
            ],
            link: '#',
            image: '/images/projects/Movie.png'
          }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.setupCarousel();
        window.addEventListener('resize', this.setupCarousel);
        
        // Add event listeners for drag scroll
        const track = this.$refs.carouselTrack;
        track.addEventListener('mousedown', this.startDrag);
        window.addEventListener('mouseup', this.endDrag);
        window.addEventListener('mousemove', this.drag);
      });
    },
    beforeUnmount() {
      this.stopAutoScroll();
      window.removeEventListener('resize', this.setupCarousel);
      
      // Remove event listeners for drag scroll
      const track = this.$refs.carouselTrack;
      if (track) {
        track.removeEventListener('mousedown', this.startDrag);
        window.removeEventListener('mouseup', this.endDrag);
        window.removeEventListener('mousemove', this.drag);
      }
    },
    methods: {
      setupCarousel() {
        // Get the first project card to calculate dimensions
        const firstCard = this.$el.querySelector('.project-card');
        if (firstCard) {
          // Store the card width for calculations
          this.cardWidth = firstCard.offsetWidth + 24; // Card width + margins
          
          // Set up the infinite scroll
          this.resetScroll();
          this.startAutoScroll();
        }
      },
      resetScroll() {
        // Reset the scroll position to start of the original cards
        this.scrollAmount = 0;
        this.updateCarouselPosition();
      },
      startAutoScroll() {
        this.stopAutoScroll();
        this.autoScrollInterval = setInterval(() => {
          // Increment by a smaller amount for slower scrolling
          this.scrollAmount += 0.2;
          
          // Check if we need to reset (when we've scrolled past all original slides)
          const totalWidth = this.cardWidth * this.projects.length;
          if (this.scrollAmount >= totalWidth) {
            this.scrollAmount = 0;
          }
          
          // Update the carousel position
          this.updateCarouselPosition();
          
          // Update current project index for indicators
          this.currentProjectIndex = Math.floor((this.scrollAmount / this.cardWidth) % this.projects.length);
        }, 30); // ~33fps - a good balance for smooth animation
      },
      stopAutoScroll() {
        if (this.autoScrollInterval) {
          clearInterval(this.autoScrollInterval);
          this.autoScrollInterval = null;
        }
      },
      pauseAutoScroll() {
        this.stopAutoScroll();
      },
      resumeAutoScroll() {
        if (!this.isDragging) {
          this.startAutoScroll();
        }
      },
      updateCarouselPosition() {
        const track = this.$refs.carouselTrack;
        if (track) {
          // Apply transform to move the carousel
          track.style.transform = `translateX(${-this.scrollAmount}px)`;
        }
      },
      scrollProjects(direction) {
        // Stop auto-scrolling when manually navigating
        this.stopAutoScroll();
        
        // Calculate the target position
        const currentIndex = Math.floor(this.scrollAmount / this.cardWidth);
        let targetIndex;
        
        if (direction === 'right') {
          targetIndex = currentIndex + 1;
        } else {
          targetIndex = currentIndex - 1;
        }
        
        // Handle wrap-around
        if (targetIndex < 0) {
          targetIndex = this.projects.length - 1;
        } else if (targetIndex >= this.projects.length) {
          targetIndex = 0;
        }
        
        // Animate to the target card
        this.animateToCard(targetIndex);
        
        // Resume auto-scrolling after a delay
        setTimeout(() => {
          if (!this.isDragging) {
            this.startAutoScroll();
          }
        }, 2000);
      },
      scrollToProject(index) {
        // Stop auto-scrolling when manually navigating
        this.stopAutoScroll();
        
        // Animate to the selected card
        this.animateToCard(index);
        
        // Resume auto-scrolling after a delay
        setTimeout(() => {
          if (!this.isDragging) {
            this.startAutoScroll();
          }
        }, 2000);
      },
      animateToCard(index) {
        const track = this.$refs.carouselTrack;
        
        // Calculate target scroll amount
        const targetAmount = index * this.cardWidth;
        
        // Animate to target
        track.style.transition = 'transform 500ms ease-in-out';
        this.scrollAmount = targetAmount;
        this.updateCarouselPosition();
        
        // Reset transition after animation completes
        setTimeout(() => {
          track.style.transition = '';
        }, 500);
        
        // Update current index
        this.currentProjectIndex = index % this.projects.length;
      },
      // Drag functionality
      startDrag(e) {
        this.isDragging = true;
        this.startX = e.pageX - this.$refs.carouselTrack.offsetLeft;
        this.scrollLeft = this.scrollAmount;
        this.stopAutoScroll();
        this.$refs.carouselTrack.style.transition = 'none';
        this.$refs.carouselTrack.style.cursor = 'grabbing';
      },
      endDrag() {
        this.isDragging = false;
        this.$refs.carouselTrack.style.cursor = 'grab';
        
        // Snap to nearest card
        const nearestIndex = Math.round(this.scrollAmount / this.cardWidth);
        this.animateToCard(nearestIndex % this.projects.length);
        
        // Resume auto-scrolling after a delay
        setTimeout(() => {
          this.startAutoScroll();
        }, 2000);
      },
      drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - this.$refs.carouselTrack.offsetLeft;
        const walk = (x - this.startX) * 1.5; // Drag speed multiplier
        
        // Calculate new position
        this.scrollAmount = this.scrollLeft - walk;
        
        // Update carousel position without animation
        this.updateCarouselPosition();
      }
    }
  }
  </script>
  
  <style>
  .carousel-container {
    position: relative;
  }
  
  .carousel-track-container {
    padding: 20px 0;
    position: relative;
  }
  
  .carousel-track {
    cursor: grab;
    will-change: transform;
    transition: transform 30ms linear;
  }
  
  .typing-animation {
    overflow: hidden;
    border-right: 2px solid #4ade80;
    white-space: nowrap;
    animation: typing 2.5s steps(20, end), blink-caret .75s step-end infinite;
    display: inline-block;
  }
  
  .bg-grid {
    background-size: 50px 50px;
    background-image: 
      linear-gradient(to right, #222 1px, transparent 1px),
      linear-gradient(to bottom, #222 1px, transparent 1px);
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #4ade80 }
  }
  </style>