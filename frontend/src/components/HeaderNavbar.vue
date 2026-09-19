<!-- src/components/HeaderNavbar.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { theme } from '../theme'

defineProps<{
  logoText?: string
}>()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="lise-header">
    <div class="lise-container lise-header__inner">
      <a href="#" class="lise-header__logo">
        {{ logoText || 'beispiel GmbH' }}
      </a>

      <!-- Navigation Desktop & Mobile -->
      <nav class="lise-nav" :class="{ 'lise-nav--open': isMenuOpen }">
        <ul class="lise-nav__list">
          <li class="lise-nav__item">
            <a href="/leistungen" class="lise-nav__link" @click="isMenuOpen = false">Leistungen</a>
          </li>
          <li class="lise-nav__item">
            <a href="/projekte" class="lise-nav__link" @click="isMenuOpen = false">Projekte</a>
          </li>
          <li class="lise-nav__item">
            <a href="/ueber-uns" class="lise-nav__link" @click="isMenuOpen = false">Über uns</a>
          </li>
          <li class="lise-nav__item">
            <a href="/kontakt" class="lise-nav__link lise-btn lise-btn--nav" @click="isMenuOpen = false">Kontakt</a>
          </li>
        </ul>
      </nav>

      <!-- Bouton Menu Burger (Mobile) -->
      <button 
        class="lise-header__burger" 
        :aria-expanded="isMenuOpen" 
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="lise-burger-bar"></span>
        <span class="lise-burger-bar"></span>
        <span class="lise-burger-bar"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.lise-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-container {
  max-width: v-bind('theme.dimensions.containerMaxWidth');
  margin: 0 auto;
  padding: 0 v-bind('theme.spacing.md');
}

.lise-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: v-bind('theme.dimensions.headerHeight');
}

.lise-header__logo {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  text-decoration: none;
}

.lise-nav__list {
  display: flex;
  align-items: center;
  gap: v-bind('theme.spacing.lg');
  list-style: none;
  margin: 0;
  padding: 0;
}

.lise-nav__link {
  font-family: v-bind('theme.typography.fontFamily.sans');
  color: v-bind('theme.colors.neutral[700]');
  text-decoration: none;
  font-weight: v-bind('theme.typography.fontWeight.medium');
  transition: color 0.2s ease;
}

.lise-nav__link:hover {
  color: v-bind('theme.colors.primary[500]');
}

.lise-btn--nav {
  background-color: v-bind('theme.colors.primary[500]');
  color: #ffffff;
  padding: v-bind('theme.spacing.xs') v-bind('theme.spacing.md');
  border-radius: v-bind('theme.dimensions.borderRadius.md');
}

.lise-btn--nav:hover {
  background-color: v-bind('theme.colors.primary[600]');
  color: #ffffff;
}

.lise-header__burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.lise-burger-bar {
  width: 100%;
  height: 3px;
  background-color: v-bind('theme.colors.neutral[900]');
  border-radius: 2px;
}

/* Responsive Mobile */
@media (max-width: 768px) {
  .lise-header__burger {
    display: flex;
  }

  .lise-nav {
    position: absolute;
    top: v-bind('theme.dimensions.headerHeight');
    left: 0;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
    display: none;
    padding: v-bind('theme.spacing.lg') 0;
  }

  .lise-nav--open {
    display: block;
  }

  .lise-nav__list {
    flex-direction: column;
    gap: v-bind('theme.spacing.md');
  }
}
</style>