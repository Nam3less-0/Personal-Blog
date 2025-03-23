<template>
  <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 w-full">
    <nav class="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 py-4 text-gray-800 dark:text-gray-100">
      <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Joshua Chen</h1>
      <ul class="flex space-x-6 font-medium">
        <li><a href="#home" class="hover:text-blue-500">Home</a></li>
        <li><a href="#about" class="hover:text-blue-500">About</a></li>
        <li><a href="#projects" class="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'


onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
})
</script>
