<!-- src/views/AboutView.vue -->
<script setup lang="ts">
import { theme } from '@/theme'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'

interface ValueItem {
  title: string
  description: string
  icon: string
}

const values: ValueItem[] = [
  {
    title: 'Qualität & Software-Craftsmanship',
    description: 'Wir schreiben sauberen, wartbaren und nachhaltigen Code nach modernen Best Practices und Clean Architecture Standards.',
    icon: '🎯'
  },
  {
    title: 'Agile Partnerschaft',
    description: 'Transparente Kommunikation, enge Einbindung unserer Kunden und flexible Anpassung an sich ändernde Anforderungen.',
    icon: '🤝'
  },
  {
    title: 'Technologische Innovation',
    description: 'Kontinuierliche Evaluierung und Integration moderner Frameworks (Vue 3, TypeScript, Cloud Native, AI-Services).',
    icon: '⚡'
  }
]
</script>

<template>
  <div class="lise-layout">
    <HeaderNavbar logoText="STN ENTERPRISES GmbH" />

    <main class="lise-main">
      <!-- Section En-tête -->
      <section class="lise-about-hero">
        <div class="lise-container">
          <h1 class="lise-about-hero__title">Über STN ENTERPRISES GmbH</h1>
          <p class="lise-about-hero__subtitle">
            Ihr verlässlicher Partner für maßgeschneiderte Softwareentwicklung, digitale Transformation und begeisternde Nutzererlebnisse.
          </p>
        </div>
      </section>

      <!-- Section Story & Vision -->
      <section class="lise-about-story">
        <div class="lise-container lise-about-story__grid">
          <div class="lise-about-story__content">
            <h2 class="lise-section-title">Wer wir sind</h2>
            <p class="lise-text-paragraph">
              Die <strong>STN ENTERPRISES GmbH</strong> ist ein leidenschaftliches Team aus Softwarearchitekten, Entwicklern und UI/UX-Spezialisten. Wir entwickeln kundenindividuelle Softwaresysteme, die komplexe Geschäftsprozesse vereinfachen und echten Mehrwert schaffen.
            </p>
            <p class="lise-text-paragraph">
              Egal ob performante Webanwendungen, Cloud-Infrastrukturen oder moderne API-Architekturen – wir begleiten Projekte von der ersten Idee bis hin zum erfolgreichen Produktivbetrieb.
            </p>
          </div>

          <div class="lise-about-story__stats">
            <div class="lise-stat-card">
              <span class="lise-stat-card__number">100%</span>
              <span class="lise-stat-card__label">Leidenschaft für Code</span>
            </div>
            <div class="lise-stat-card">
              <span class="lise-stat-card__number">Vue 3</span>
              <span class="lise-stat-card__label">& TypeScript Focus</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Valeurs -->
      <section class="lise-about-values">
        <div class="lise-container">
          <h2 class="lise-section-title lise-section-title--center">Unsere Werte</h2>
          <div class="lise-values-grid">
            <article 
              v-for="(val, idx) in values" 
              :key="idx" 
              class="lise-value-card"
            >
              <div class="lise-value-card__icon">{{ val.icon }}</div>
              <h3 class="lise-value-card__title">{{ val.title }}</h3>
              <p class="lise-value-card__desc">{{ val.description }}</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <MainFooter companyName="STN ENTERPRISES GmbH" />
  </div>
</template>

<style scoped>
.lise-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.lise-main {
  flex: 1;
}

.lise-container {
  max-width: v-bind('theme.dimensions.containerMaxWidth');
  margin: 0 auto;
  padding: 0 v-bind('theme.spacing.md');
}

/* Hero Section */
.lise-about-hero {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  text-align: center;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-about-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-about-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.lg');
  color: v-bind('theme.colors.neutral[700]');
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Story Section */
.lise-about-story {
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-about-story__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.xl');
  align-items: center;
}

.lise-section-title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["2xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.md');
}

.lise-section-title--center {
  text-align: center;
  margin-bottom: v-bind('theme.spacing["2xl"]');
}

.lise-text-paragraph {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin-bottom: v-bind('theme.spacing.md');
}

.lise-about-story__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: v-bind('theme.spacing.md');
}

.lise-stat-card {
  background-color: v-bind('theme.colors.neutral[50]');
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.lg');
  text-align: center;
}

.lise-stat-card__number {
  display: block;
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["2xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.primary[500]');
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-stat-card__label {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.sm');
  color: v-bind('theme.colors.neutral[700]');
}

/* Values Section */
.lise-about-values {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  border-top: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.xl');
}

.lise-value-card {
  background-color: #ffffff;
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.xl');
  text-align: center;
}

.lise-value-card__icon {
  font-size: 2.5rem;
  margin-bottom: v-bind('theme.spacing.md');
}

.lise-value-card__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-value-card__desc {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin: 0;
}

/* Responsive Grid */
@media (min-width: 768px) {
  .lise-about-story__grid {
    grid-template-columns: 3fr 2fr;
  }

  .lise-values-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>