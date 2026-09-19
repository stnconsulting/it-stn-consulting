<!-- src/components/HeroSection.vue -->
<script setup lang="ts">
import { theme } from '../theme'


defineProps<{
  title?: string
  subtitle?: string
  buttonText?: string
}>()

const emit = defineEmits<{
  (e: 'ctaClick'): void
}>()
</script>

<template>
  <section class="lise-hero">
    <div class="lise-container">
      <h1 class="lise-hero__title">
        {{ title || 'Softwareentwicklung, die begeistert' }}
      </h1>
      <p class="lise-hero__subtitle">
        {{ subtitle || 'Wir entwickeln maßgeschneiderte Softwarelösungen für Ihren Erfolg.' }}
      </p>
      <button class="lise-btn lise-btn--primary" @click="emit('ctaClick')">
        {{ buttonText || 'Projekt starten' }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.lise-hero {
  padding: v-bind('theme.spacing["2xl"]') v-bind('theme.spacing.md');
  background-color: v-bind('theme.colors.neutral[50]');
  text-align: center;
}

.lise-container {
  max-width: v-bind('theme.dimensions.containerMaxWidth');
  margin: 0 auto;
}

.lise-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["2xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.md');
  line-height: 1.2;
}

.lise-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  margin-bottom: v-bind('theme.spacing.xl');
  line-height: 1.5;
}

.lise-btn--primary {
  background-color: v-bind('theme.colors.primary[500]');
  color: #ffffff;
  padding: v-bind('theme.spacing.sm') v-bind('theme.spacing.lg');
  border: none;
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.lise-btn--primary:hover {
  background-color: v-bind('theme.colors.primary[600]');
}

/* Adaptations Responsives avec breakpoints du theme */
@media (min-width: 768px) {
  .lise-hero {
    padding: 100px v-bind('theme.spacing.xl');
  }

  .lise-hero__title {
    font-size: v-bind('theme.typography.fontSize["3xl"]');
  }

  .lise-hero__subtitle {
    font-size: v-bind('theme.typography.fontSize.lg');
  }
}
</style>