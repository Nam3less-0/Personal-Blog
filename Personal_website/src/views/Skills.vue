<template>
    <section id="skills" class="w-full py-24 bg-gray-900 text-white font-mono relative overflow-hidden">
      <!-- Animated background grid -->
      <div class="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      <!-- Floating tech elements -->
      <div class="absolute top-40 right-20 text-blue-500 opacity-20 animate-float">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
        </svg>
      </div>
      <div class="absolute bottom-20 left-40 text-green-500 opacity-20 animate-float-delay">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>
      
      <!-- Main content -->
      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <div class="mb-16 text-center">
          <div class="inline-block px-3 py-1 bg-gray-800 rounded-full text-green-400 text-sm mb-4">
            My Expertise
          </div>
          <h2 class="text-4xl font-bold relative inline-block">
            _Skills & Technologies
            <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Data Analyst Skills -->
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300 h-full">
            <div class="mb-4 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-md flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Data Analyst Skills</h3>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">Data Visualization</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">Data Cleaning</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">Tableau</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">Pandas</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">NumPy</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">Excel</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">Matplotlib</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-blue-300 text-sm">Scikit-learn</span>
            </div>
            
            <div class="mt-6 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-green-500 w-4/5"></div>
            </div>
            <div class="text-right text-xs text-gray-400 mt-1">Advanced proficiency</div>
          </div>
          
          <!-- Programming Languages & Frameworks -->
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300 h-full">
            <div class="mb-4 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Programming Languages & Frameworks</h3>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">Python</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">Java</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">HTML</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">CSS</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">React.js</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">React Native</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">SQL</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">R</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">Node.js</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-purple-300 text-sm">Vue.js</span>
            </div>
            
            <div class="mt-6 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-9/12"></div>
            </div>
            <div class="text-right text-xs text-gray-400 mt-1">Strong proficiency</div>
          </div>
          
          <!-- Technical Skills -->
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300 h-full">
            <div class="mb-4 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-md flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Technical Skills</h3>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="px-3 py-1 bg-gray-700 rounded-full text-yellow-300 text-sm">Object-Oriented Programming</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-yellow-300 text-sm">Product Management</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-yellow-300 text-sm">Product Development Lifecycle</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-yellow-300 text-sm">Git</span>
              <span class="px-3 py-1 bg-gray-700 rounded-full text-yellow-300 text-sm">Agile & Scrum Methodology</span>
            </div>
            
            <div class="mt-6 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-4/5"></div>
            </div>
            <div class="text-right text-xs text-gray-400 mt-1">Advanced proficiency</div>
          </div>
        </div>
        
        <!-- Experience Bar Section -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold mb-8 text-center">Skills Proficiency</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left column -->
            <div class="space-y-6">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">Python</span>
                  <span class="text-gray-400">95%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 95%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">Java</span>
                  <span class="text-gray-400">90%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 90%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">JavaScript/React</span>
                  <span class="text-gray-400">85%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 85%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">SQL</span>
                  <span class="text-gray-400">88%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 88%"></div>
                </div>
              </div>
            </div>
            
            <!-- Right column -->
            <div class="space-y-6">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">Pandas/NumPy</span>
                  <span class="text-gray-400">92%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 92%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">Tableau</span>
                  <span class="text-gray-400">85%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 85%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">Product Development</span>
                  <span class="text-gray-400">80%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 80%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-green-400">Git & Agile</span>
                  <span class="text-gray-400">87%</span>
                </div>
                <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-500 to-blue-500" style="width: 87%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Code block decoration -->
        <div class="mt-16 flex justify-center">
          <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg w-full max-w-2xl user-select-none">
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <div class="ml-4 text-sm text-gray-400">skills.json</div>
            </div>
            <div class="font-mono text-sm">
              <div class="text-yellow-300 whitespace-pre-wrap">
  {
    "name": "Joshua Chen",
    "title": "Data Analyst & Web Developer",
    "core_skills": {
      "data_analysis": ["Pandas", "NumPy", "Scikit-learn", "Tableau"],
      "web_development": ["JavaScript", "React", "Node.js", "HTML/CSS"],
      "languages": ["Python", "SQL", "JavaScript", "Java", "R"]
    },
    "interests": ["Machine Learning", "Data Visualization", "Web Applications"],
    "currently_learning": "Advanced ML Techniques & Wed Mining for Business Insights"
  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection'
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
  
  .user-select-none {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  </style>