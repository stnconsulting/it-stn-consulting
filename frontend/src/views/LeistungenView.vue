<!-- src/views/LeistungenView.vue -->
<script setup lang="ts">
import { theme } from '@/theme'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Individuelle Softwareentwicklung',
    description: 'Maßgeschneiderte Web- und Backend-Anwendungen, die exakt auf Ihre Geschäftsprozesse abgestimmt sind.',
    icon: '💻',
    features: ['Vue 3 & TypeScript Frontend', 'Skalierbare Backend-Architekturen', 'REST & GraphQL APIs']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Integration',
    description: 'Moderne Containerisierung und Deployment-Pipelines für eine zuverlässige und automatisierte Inbetriebsetzung.',
    icon: '☁️',
    features: ['Docker & Containerisierung', 'CI/CD Automation', 'Cloud-Deployment (AWS, Railway, Azure)']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Prototyping',
    description: 'Benutzerfreundliche und reaktive Oberflächen, konzipiert mit modernem Design-Thinking.',
    icon: '🎨',
    features: ['Figma Prototyping', 'Design Systems', 'Responsive Web Design']
  },
  {
    id: 'consulting',
    title: 'IT-Beratung & Architektur',
    description: 'Strategische Beratung zur Modernisierung Ihrer IT-Landschaft und Auswahl passender Tech-Stacks.',
    icon: '🚀',
    features: ['Code-Audits & Refactoring', 'System-Architektur', 'Agile Methodik']
  }
]
</script>

<template>
  <div class="lise-layout">
    <HeaderNavbar logoText="STN ENTERPRISES GmbH" />

    <main class="lise-main">
      <!-- Section En-tête -->
      <section class="lise-services-hero">
        <div class="lise-container">
          <h1 class="lise-services-hero__title">Unsere Leistungen</h1>
          <p class="lise-services-hero__subtitle">
            Wir unterstützen Sie von der ersten Idee bis zur fertigen Softwarelösung mit modernsten Technologien.
          </p>
        </div>
      </section>

      <!-- Grid des Services -->
      <section class="lise-services-grid-section">
        <div class="lise-container">
          <div class="lise-services-grid">
            <article 
              v-for="service in services" 
              :key="service.id" 
              class="lise-service-card"
            >
              <div class="lise-service-card__icon">{{ service.icon }}</div>
              <h2 class="lise-service-card__title">{{ service.title }}</h2>
              <p class="lise-service-card__desc">{{ service.description }}</p>
              
              <ul class="lise-service-card__features">
                <li v-for="(feature, idx) in service.features" :key="idx">
                  <span class="lise-service-card__check">✓</span> {{ feature }}
                </li>
              </ul>
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

/* Hero Services */
.lise-services-hero {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  text-align: center;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-services-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-services-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.lg');
  color: v-bind('theme.colors.neutral[700]');
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Grid & Cards */
.lise-services-grid-section {
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.xl');
}

.lise-service-card {
  background-color: #ffffff;
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.xl');
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lise-service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.lise-service-card__icon {
  font-size: 2.5rem;
  margin-bottom: v-bind('theme.spacing.md');
}

.lise-service-card__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["2xl"]');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-service-card__desc {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin-bottom: v-bind('theme.spacing.lg');
}

.lise-service-card__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.xs');
}

.lise-service-card__features li {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.sm');
  color: v-bind('theme.colors.neutral[800]');
  display: flex;
  align-items: center;
  gap: v-bind('theme.spacing.xs');
}

.lise-service-card__check {
  color: v-bind('theme.colors.primary[500]');
  font-weight: bold;
}

/* Responsive Grid */
@media (min-width: 768px) {
  .lise-services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .lise-services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>