<template>
  <footer class="footer-section">
    <div class="footer-content">
      <h2 class="footer-heading">Let's work together.</h2>
      <a :href="`mailto:${profile.email}`" class="footer-email">{{ profile.email }}</a>

      <div class="social-row">
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="GitHub"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="LinkedIn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          :href="`mailto:${profile.email}`"
          class="social-link"
          aria-label="Email"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </div>

    <div class="footer-bar">
      <span class="footer-meta">© {{ currentYear }} {{ profile.name }}. All rights reserved.</span>
      <span class="footer-meta">Built with Vue 3 + Three.js</span>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '@/data/profile.js'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-section {
  background: #e8e8e5;
  padding: 6rem 1.5rem 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 4rem;
}

.footer-heading {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.footer-email {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  transition: color var(--transition-fast);
}

.footer-email:hover {
  color: var(--accent-text);
}

.social-row {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.social-link {
  color: var(--text-tertiary);
  transition: color var(--transition-fast);
}

.social-link:hover {
  color: var(--text-primary);
}

.footer-bar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 0;
  border-top: var(--border-glass);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .footer-bar {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-tertiary);
}
</style>
