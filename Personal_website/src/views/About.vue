<template>
    <section id="about" class="w-full py-24 bg-gray-900 text-white font-mono relative overflow-hidden">
      <!-- Animated background grid -->
      <div class="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      <!-- Floating tech elements -->
      <div class="absolute top-40 left-20 text-purple-500 opacity-20 animate-float">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </svg>
      </div>
      <div class="absolute bottom-30 right-30 text-green-500 opacity-20 animate-float-delay">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </div>
      
      <!-- Main content -->
      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <div class="mb-16 text-center">
          <div class="inline-block px-3 py-1 bg-gray-800 rounded-full text-green-400 text-sm mb-4">
            Get to know me
          </div>
          <h2 class="text-4xl font-bold relative inline-block">
            _About Me
            <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <!-- Image/Avatar with terminal frame -->
          <div class="md:col-span-1 flex justify-center">
            <div class="relative">
              <div class="bg-gray-800 p-2 rounded-lg border border-gray-700 shadow-lg w-64">
                <div class="flex items-center mb-2 px-2">
                  <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  <div class="ml-4 text-xs text-gray-400">profile.jpg</div>
                </div>
                <div class="aspect-square bg-gradient-to-br from-blue-600 to-indigo-800 rounded overflow-hidden">
                  <!-- Replace with your actual image -->
                  <div class="w-full h-full flex items-center justify-center text-center p-4">
                    <div class="text-white opacity-80">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <div class="mt-2">[ Your profile image ]</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 blur-xl"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg opacity-50 blur-xl"></div>
            </div>
          </div>
          
          <!-- About text with terminal style -->
          <div class="md:col-span-2">
            <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
              <div class="flex items-center mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="ml-4 text-sm text-gray-400">bio.txt</div>
              </div>
              
              <div class="font-mono text-sm">
                <div class="mb-3">
                  <span class="text-green-400">$ </span>
                  <span class="text-gray-300">cat joshua_chen_bio.txt</span>
                </div>
                
                <div class="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Highly motivated <span class="text-green-400">Business Analytics</span> student at the 
                    <span class="text-blue-400">National University of Singapore</span> with a strong record of 
                    academic excellence, including placement on the <span class="text-yellow-400">Dean's List</span> 
                    and recipient of the <span class="text-yellow-400">NUS Merit Scholarship</span>.
                  </p>
                  
                  <p>
                    I blend a solid analytical foundation with hands-on technical expertise in 
                    <span class="text-green-400">data visualization</span>, 
                    <span class="text-green-400">machine learning</span>, and 
                    <span class="text-green-400">software development</span>. 
                    Proficient in <span class="text-purple-400">Python</span>, 
                    <span class="text-purple-400">Java</span>, 
                    <span class="text-purple-400">SQL</span>, and a range of modern data tools—including 
                    <span class="text-blue-400">Tableau</span>, 
                    <span class="text-blue-400">Pandas</span>, and 
                    <span class="text-blue-400">Scikit-learn</span>—I excel at turning complex data into clear, actionable insights.
                  </p>
                  
                  <p>
                    Whether leading projects in data analysis or collaborating on innovative software solutions, 
                    I am dedicated to bridging the gap between technology and business strategy, continuously striving 
                    to drive impactful results through effective problem-solving and teamwork.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Key highlights -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div class="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-md flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <h3 class="text-md font-bold text-white">Academic Excellence</h3>
                </div>
                <p class="text-gray-400 text-sm">Dean's List & NUS Merit Scholarship recipient with proven academic record.</p>
              </div>
              
              <div class="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 class="text-md font-bold text-white">Technical Proficiency</h3>
                </div>
                <p class="text-gray-400 text-sm">Skilled in data analysis, visualization & modern development workflows.</p>
              </div>
              
              <div class="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-md flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  <h3 class="text-md font-bold text-white">Collaborative Mindset</h3>
                </div>
                <p class="text-gray-400 text-sm">Thrives in team environments with strong problem-solving abilities.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Education & Achievements Terminal -->
        <div class="mt-16">
          <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg mx-auto max-w-4xl">
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <div class="ml-4 text-sm text-gray-400">education.sh</div>
            </div>
            
            <div class="font-mono text-sm">
              <div class="mb-3">
                <span class="text-green-400">$ </span>
                <span class="text-gray-300">./show_education.sh</span>
              </div>
              
              <div class="mb-4">
                <p class="text-blue-400 font-bold">National University of Singapore</p>
                <p class="text-gray-300">Bachelor of Science in Business Analytics | 2023 - 2027</p>
                <ul class="list-disc pl-5 mt-2 text-gray-400">
                  <li>Dean's List (Academic Year 2023/2024)</li>
                  <li>NUS Merit Scholarship Recipient</li>
                </ul>
              </div>
              
              <div class="mb-3">
                <span class="text-green-400">$ </span>
                <span class="text-gray-300">./show_certifications.sh</span>
              </div>
              
              <div>
                <ul class="list-disc pl-5 text-gray-400">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'About'
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
  
  .blur-xl {
    filter: blur(24px);
  }
  </style>