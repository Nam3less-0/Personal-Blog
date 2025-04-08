<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 border-b border-gray-800 py-4 px-6">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" class="text-xl font-bold">
          <span class="text-green-400">Joshua</span>
          <span class="text-gray-400">.dev</span>
        </a>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-300 hover:text-white focus:outline-none">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a href="#home" @click="scrollToSection('home')" class="nav-link" :class="activeSection === 'home' ? 'text-green-400' : 'text-gray-300'">Home</a>
          <a href="#about" @click="scrollToSection('about')" class="nav-link" :class="activeSection === 'about' ? 'text-green-400' : 'text-gray-300'">About</a>
          <a href="#projects" @click="scrollToSection('projects')" class="nav-link" :class="activeSection === 'projects' ? 'text-green-400' : 'text-gray-300'">Projects</a>
          <a href="#experience" @click="scrollToSection('experience')" class="nav-link" :class="activeSection === 'experience' ? 'text-green-400' : 'text-gray-300'">Experience</a>
          <a href="#skills" @click="scrollToSection('skills')" class="nav-link" :class="activeSection === 'skills' ? 'text-green-400' : 'text-gray-300'">Skills</a>
          <a href="#contact" @click="scrollToSection('footer')" class="nav-link" :class="activeSection === 'contact' ? 'text-green-400' : 'text-gray-300'">Contact</a>
        </div>
        
        <!-- Theme toggle -->
        <button class="hidden md:block ml-4 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>
    </nav>
    
    <!-- Mobile Navigation Menu -->
    <div v-if="isMenuOpen" class="md:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-95 pt-20">
      <div class="px-6 py-4 flex flex-col space-y-6">
        <a href="#home" @click="mobileNavClick('home')" class="text-lg py-2 border-b border-gray-800" :class="activeSection === 'home' ? 'text-green-400' : 'text-gray-300'">Home</a>
        <a href="#about" @click="mobileNavClick('about')" class="text-lg py-2 border-b border-gray-800" :class="activeSection === 'about' ? 'text-green-400' : 'text-gray-300'">About</a>
        <a href="#projects" @click="mobileNavClick('projects')" class="text-lg py-2 border-b border-gray-800" :class="activeSection === 'projects' ? 'text-green-400' : 'text-gray-300'">Projects</a>
        <a href="#experience" @click="mobileNavClick('experience')" class="text-lg py-2 border-b border-gray-800" :class="activeSection === 'experience' ? 'text-green-400' : 'text-gray-300'">Experience</a>
        <a href="#skills" @click="mobileNavClick('skills')" class="text-lg py-2 border-b border-gray-800" :class="activeSection === 'skills' ? 'text-green-400' : 'text-gray-300'">Skills</a>
        <a href="#contact" @click="mobileNavClick('contact')" class="text-lg py-2 border-b border-gray-800" :class="activeSection === 'contact' ? 'text-green-400' : 'text-gray-300'">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    activeSection: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      this.$emit('section-change', sectionId);
    },
    mobileNavClick(sectionId) {
      this.scrollToSection(sectionId);
      this.toggleMenu();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4ade80 !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #4ade80;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>