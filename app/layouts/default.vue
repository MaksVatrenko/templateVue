<template>
  <div class="layout-wrapper">
    <!-- Skip to main content link for keyboard users -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <header class="site-header">
      <div class="container">
        <div class="header-inner">
          <!-- Logo -->
          <NuxtLink to="/" class="logo-link" aria-label="Home">
            {{ t("app.title") }}
          </NuxtLink>

          <!-- Navigation -->
          <nav class="site-nav" aria-label="Main navigation">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              class="nav-link"
              :class="{ active: route.path === item.href }"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main id="main-content" class="site-main">
      <div class="container">
        <ClientOnly>
          <Suspense>
            <template #default>
              <NuxtLoadingIndicator class="loading-indicator" :height="2" />
            </template>
            <template #fallback>
              <div class="loading-fallback" />
            </template>
          </Suspense>
        </ClientOnly>
        <NuxtPage />
      </div>
    </main>

    <footer class="site-footer">
      <div class="container">
        <p class="footer-text">
          {{ t("footer.copyright", { year }) }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { Composer } from "vue-i18n";
import type { NuxtApp } from "nuxt/app";

const nuxtApp = useNuxtApp() as NuxtApp & { $i18n: () => Composer };
const t = nuxtApp.$i18n().t;

const navigation = [
  { name: t("nav.home"), href: "/" },
  { name: t("nav.posts"), href: "/posts" },
];

const route = useRoute();
const year = new Date().getFullYear();
</script>

<style scoped>
:root {
  /* Color variables */
  --color-background: #f9fafb; /* Light gray */
  --color-foreground: #111827; /* Dark gray */
  --color-primary: #2563eb; /* Blue */
  --color-secondary: #6b7280; /* Gray */
}

/* Layout wrapper */
.layout-wrapper {
  background-color: var(--color-background);
  color: var(--color-foreground);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Skip-link: visually hidden, but visible on focus */
.skip-link {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.skip-link:focus {
  margin: 0;
  width: auto;
  height: auto;
  clip: auto;
  white-space: normal;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  background-color: var(--color-background);
  color: var(--color-foreground);
  z-index: 50;
}

/* Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #e5e7eb;
  backdrop-filter: blur(10px);
}

/* Container (common wrapper) */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}
@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Header inner flex */
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

/* Logo link */
.logo-link {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  color: inherit;
}
.logo-link:hover,
.logo-link:focus {
  color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 2px var(--color-primary);
}

/* Navigation */
.site-nav {
  display: flex;
  gap: 1.5rem;
}
.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}
.nav-link:hover,
.nav-link:focus {
  color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 2px var(--color-primary);
}
.nav-link.active {
  color: var(--color-primary);
}

/* Main content */
.site-main {
  flex: 1;
  padding: 2rem 0;
}

/* Loading indicator */
.loading-indicator {
  z-index: 50;
}
.loading-fallback {
  height: 0.25rem;
  width: 100%;
  background-color: #e5e7eb;
}

/* Footer */
.site-footer {
  margin-top: auto;
  border-top: 1px solid #e5e7eb;
  padding: 1.5rem 0;
}
.footer-text {
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
  margin: 0;
}
</style>
