<template>
    <div class="project-card mx-3">
      <div 
        class="h-48 rounded-t-lg relative overflow-hidden" 
        :class="gradientClasses[category] || 'bg-gradient-to-br from-blue-600 to-indigo-800'"
      >
        <!-- Show image if provided, otherwise show icon -->
        <img 
          v-if="image" 
          :src="image" 
          :alt="title" 
          class="absolute inset-0 w-full h-full object-cover brightness-125 contrast-110"
        />
        <div v-else class="absolute inset-0 flex items-center justify-center opacity-80">
          <component :is="getCategoryIcon" width="64" height="64" stroke-width="1.5" />
        </div>
        <!-- Reduced opacity of overlay from 40% to 20% -->
        <div class="absolute inset-0 bg-black bg-opacity-20"></div>
        <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-xs py-1 px-2 rounded-full">
          {{ category }}
        </div>
      </div>
      
      <div class="p-6 bg-gray-800 rounded-b-lg border-t border-gray-700 flex flex-col h-64">
        <h3 class="text-xl font-bold mb-2 text-white">{{ title }}</h3>
        <p class="text-gray-300 text-sm mb-4 line-clamp-3">{{ description }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tech in technologies" 
            :key="tech.name"
            class="px-2 py-1 bg-gray-700 rounded-md text-xs"
            :class="tech.color || 'text-blue-300'"
          >
            {{ tech.name }}
          </span>
        </div>
        <div class="mt-auto">
          <a :href="link" class="text-green-400 hover:text-green-300 text-sm flex items-center">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      category: {
        type: String,
        default: 'Web App'
      },
      technologies: {
        type: Array,
        default: () => []
      },
      link: {
        type: String,
        default: '#'
      },
      image: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        gradientClasses: {
          'Web App': 'bg-gradient-to-br from-blue-500 to-indigo-700', // Lighter blue
          'Web Dev': 'bg-gradient-to-br from-blue-500 to-indigo-700', // Lighter blue
          'E-Commerce': 'bg-gradient-to-br from-pink-500 to-red-600', // Lighter pink
          'Social Network': 'bg-gradient-to-br from-purple-500 to-indigo-600', // Lighter purple
          'Data Analysis': 'bg-gradient-to-br from-green-500 to-teal-600', // Lighter green
          'Machine Learning': 'bg-gradient-to-br from-yellow-400 to-orange-500' // Lighter yellow
        }
      }
    },
    computed: {
      getCategoryIcon() {
        // Return different SVG components based on category
        return {
          template: this.getCategoryIconTemplate()
        }
      }
    },
    methods: {
      getCategoryIconTemplate() {
        switch(this.category) {
          case 'Web App':
          case 'Web Dev':
            return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 20v-3M18 14v-3M18 8V5M6 20v-3M6 14v-3M6 8V5M12 20v-3M12 14v-3M12 8V5M20 6 4 6M20 12 4 12M20 18 4 18"></path>
                    </svg>`;
          case 'E-Commerce':
            return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>`;
          case 'Social Network':
            return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>`;
          case 'Data Analysis':
            return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>`;
          case 'Machine Learning':
            return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>`;
          default:
            return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>`;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .project-card {
    width: 320px; /* Fixed width */
    transition: transform 0.3s ease;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
    margin: 0 12px;
    display: flex;
    flex-direction: column;
    height: 60vh; /* Fixed height for the entire card */
    user-select: none; /* Prevent text selection */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
  }
  
  .project-card:hover {
    transform: translateY(-10px);
  }
  
  /* Add line clamping for description text */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Add CSS filters for brightness */
  .brightness-125 {
    filter: brightness(10);
  }
  
  .contrast-110 {
    filter: contrast(1.1);
  }
  </style>