<template>
  <div class="app bg-gray-900 min-h-screen font-mono text-white">
    <!-- Navigation Bar Component -->
    <Navbar :activeSection="activeSection" @section-change="scrollToSection" />
    
    <!-- Main Content -->
    <main>
      <!-- Home Section -->
      <section id="home" ref="home" class="section pt-16">
        <Home />
      </section>

      <!-- About Section Placeholder -->
      <section id="about" ref="about" class="section">
        <About />
      </section>

      <!-- Projects Section -->
      <section id="projects" ref="projects" class="section">
        <Projects />
      </section>
      
      
      
      
      
      <!-- Skills Section Placeholder -->
      <section id="skills" ref="skills" class="section">
        <Skills />
      </section>

    </main>
    
    <!-- Experience Section Placeholder -->
      <section id="experience" ref="experience" class="section">
        <div class="w-full min-h-screen bg-gray-900 text-white font-mono py-20 relative">
          <div class="absolute inset-0 bg-grid opacity-10 z-0"></div>
          <div class="relative z-10 max-w-6xl mx-auto px-6">
            <div class="text-green-400 mb-2 flex items-center">
              <span class="mr-2">$</span>
              <span class="typing-animation">less experience.log</span>
            </div>
            <h2 class="text-4xl font-bold mb-12 text-gray-100">Experience</h2>
            <p class="text-gray-300 mb-8">Excited to gain real world experience.</p>
          </div>
        </div>
      </section>

    <!-- Footer Component -->
    <section id="footer" ref="footer" >
    <Footer />
    </section>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Skills from './views/Skills.vue';
import About from './views/About.vue';

export default {
  name: 'App',
  components: {
    Home,
    Projects,
    Navbar,
    Footer,
    Skills,
    About
  },
  data() {
    return {
      activeSection: 'home',
      sections: ['home', 'about', 'experience', 'projects', 'skills', 'contact']
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Initial check
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.activeSection = sectionId;
    },
    handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of this.sections) {
        const element = this.$refs[section];
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = element.offsetTop;
          const height = bottom - top;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + height
          ) {
            if (this.activeSection !== section) {
              this.activeSection = section;
              history.replaceState(null, null, `#${section}`);
            }
            break;
          }
        }
      }
    }
  }
}
</script>

<style>
.section {
  scroll-margin-top: 80px;
}

.bg-grid {
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, #222 1px, transparent 1px),
    linear-gradient(to bottom, #222 1px, transparent 1px);
}

.typing-animation {
  overflow: hidden;
  border-right: 2px solid #4ade80;
  white-space: nowrap;
  animation: typing 3.5s steps(30, end), blink-caret .75s step-end infinite;
  display: inline-block;
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