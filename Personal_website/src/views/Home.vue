<template>
  <div class="w-full min-h-screen bg-gray-900 text-white font-mono relative overflow-hidden">
    <!-- Animated background grid -->
    <div class="absolute inset-0 bg-grid opacity-10 z-0"></div>
    
    <!-- Floating tech elements -->
    <div class="absolute top-20 left-20 text-blue-500 opacity-20 animate-float">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    </div>
    <div class="absolute bottom-40 right-40 text-green-500 opacity-20 animate-float-delay">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 py-24 flex items-center min-h-screen">
      <main>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-green-400 mb-2 flex items-center">
              <span class="mr-2">$</span>
              <span class="typing-animation">whoami</span>
            </div>
            <h1 class="text-5xl font-bold mb-4 text-gray-100">
              Joshua Chen
            </h1>
            <div class="flex items-center text-xl text-gray-300 mb-6">
              <span>{{ displayText }}</span>
              <span class="ml-1 inline-block w-3 h-6 bg-green-400" :class="cursorVisible ? 'opacity-100' : 'opacity-0'"></span>
            </div>
            <p class="text-gray-400 mb-8">
              Business Analytics student at NUS specializing in Machine Learning & Finance.
              Transforming complex problems into elegant digital solutions.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#projects" class="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md hover:from-green-600 hover:to-blue-600 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
                View Projects
              </a>
              <a href="#contact" class="px-6 py-3 border border-green-500 text-green-400 rounded-md hover:bg-green-500 hover:bg-opacity-10 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Me
              </a>
            </div>
            <div class="mt-8 flex space-x-4">
              <a href="https://github.com/Nam3less-03" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/joshuacjh/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="relative hidden md:block">
            <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
              <div class="flex items-center mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="ml-4 text-sm text-gray-400">terminal</div>
              </div>
              <div class="font-mono text-sm">
                <div class="mb-2">
                  <span class="text-green-400">$ </span>
                  <span class="text-gray-300">cd projects/portfolio</span>
                </div>
                <div class="mb-2">
                  <span class="text-green-400">$ </span>
                  <span class="text-gray-300">ls -la</span>
                </div>
                <div class="mb-2 text-blue-300">
                  machine-learning/    finance-analytics/    web-projects/
                </div>
                <div class="mb-2">
                  <span class="text-green-400">$ </span>
                  <span class="text-gray-300">cat skills.json</span>
                </div>
                <div class="text-yellow-300">
                  {
                    "languages": ["Python", "Java", "R", "SQL", "Javascript"],
                    "frameworks": ["Vue", "TensorFlow", "PyTorch"],
                    "tools": ["Git", "Tableau", "Skikit-learn"]
                  }
                </div>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg opacity-50 blur-xl"></div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSection',
  data() {
    return {
      displayText: '',
      fullText: 'Building digital experiences with code and data.',
      cursorVisible: true
    }
  },
  mounted() {
    // Typewriter effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= this.fullText.length) {
        this.displayText = this.fullText.substring(0, currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    // Cursor blinking effect
    setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 500);
  }
}
</script>

<style scoped>
.bg-grid {
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, #222 1px, transparent 1px),
    linear-gradient(to bottom, #222 1px, transparent 1px);
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-15px, 15px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes float-delay {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(15px, -15px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 10s ease-in-out infinite;
}

.typing-animation {
  overflow: hidden;
  border-right: 2px solid #4ade80;
  white-space: nowrap;
  animation: typing 3.5s steps(30, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #4ade80 }
}

.blur-xl {
  filter: blur(24px);
}
</style>