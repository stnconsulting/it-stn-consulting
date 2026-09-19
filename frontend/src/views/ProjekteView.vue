<!-- src/views/ProjekteView.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { theme } from '@/theme'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'

interface Project {
  id: string
  title: string
  category: 'web' | 'cloud' | 'custom'
  categoryLabel: string
  description: string
  tags: string[]
}

const activeFilter = ref<'all' | 'web' | 'cloud' | 'custom'>('all')

const projects: Project[] = [
  {
    id: 'logistics-platform',
    title: 'Digitale Logistik-Plattform',
    category: 'web',
    categoryLabel: 'Webanwendung',
    description: 'Entwicklung einer reaktiven Transportmanagement-Software zur Echtzeit-Verfolgung von Lieferungen und Auftragsverwaltung.',
    tags: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'cloud-accounting',
    title: 'Cloud-Abrechnungssystem',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    description: 'Skalierbare Accounting-Lösung mit automatisierter Datenverarbeitung, REST APIs und dynamic SVG-Visualisierungen.',
    tags: ['Django REST', 'Vue 3', 'Docker', 'Railway']
  },
  {
    id: 'parcel-management',
    title: 'Paket- & Frachtverwaltung',
    category: 'custom',
    categoryLabel: 'Individuelle Software',
    description: 'Moderne Microservice-Architektur zur Verwaltung von Logistikprozessen und automatisierter Formularverarbeitung.',
    tags: ['Java 21', 'Spring Boot 3', 'Vue 3', 'Pinia']
  },
  {
    id: 'interactive-quiz',
    title: 'Interaktive Quiz-Applikation',
    category: 'web',
    categoryLabel: 'Webanwendung',
    description: 'Entwicklung einer reaktiven Single-Page-App mit dynamischer Zustandsverwaltung und Figma-basiertem UI/UX Design.',
    tags: ['Vue 3', 'Pinia', 'TypeScript', 'Figma']
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<template>
  <div class="lise-layout">
    <HeaderNavbar />

    <main class="lise-main">
      <!-- Section En-tête -->
      <section class="lise-projects-hero">
        <div class="lise-container">
          <h1 class="lise-projects-hero__title">Unsere Projekte</h1>
          <p class="lise-projects-hero__subtitle">
            Ein Einblick in erfolgreich umgesetzte Softwarelösungen und digitale Produkte.
          </p>
        </div>
      </section>

      <!-- Section Filtres et Liste des Projets -->
      <section class="lise-projects-content">
        <div class="lise-container">
          <!-- Filtres de catégories -->
          <div class="lise-filters">
            <button 
              class="lise-filter-btn" 
              :class="{ 'lise-filter-btn--active': activeFilter === 'all' }"
              @click="activeFilter = 'all'"
            >
              Alle
            </button>
            <button 
              class="lise-filter-btn" 
              :class="{ 'lise-filter-btn--active': activeFilter === 'web' }"
              @click="activeFilter = 'web'"
            >
              Webanwendungen
            </button>
            <button 
              class="lise-filter-btn" 
              :class="{ 'lise-filter-btn--active': activeFilter === 'cloud' }"
              @click="activeFilter = 'cloud'"
            >
              Cloud & DevOps
            </button>
            <button 
              class="lise-filter-btn" 
              :class="{ 'lise-filter-btn--active': activeFilter === 'custom' }"
              @click="activeFilter = 'custom'"
            >
              Individuelle Software
            </button>
          </div>

          <!-- Grid des projets -->
          <div class="lise-projects-grid">
            <article 
              v-for="project in filteredProjects" 
              :key="project.id" 
              class="lise-project-card"
            >
              <div class="lise-project-card__header">
                <span class="lise-project-card__category">{{ project.categoryLabel }}</span>
              </div>
              <h2 class="lise-project-card__title">{{ project.title }}</h2>
              <p class="lise-project-card__desc">{{ project.description }}</p>

              <div class="lise-project-card__tags">
                <span 
                  v-for="(tag, idx) in project.tags" 
                  :key="idx" 
                  class="lise-project-card__tag"
                >
                  {{ tag }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <MainFooter companyName="lise GmbH" />
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
.lise-projects-hero {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  text-align: center;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-projects-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-projects-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.lg');
  color: v-bind('theme.colors.neutral[700]');
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Content & Filters */
.lise-projects-content {
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: v-bind('theme.spacing.sm');
  margin-bottom: v-bind('theme.spacing["2xl"]');
}

.lise-filter-btn {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.sm');
  font-weight: v-bind('theme.typography.fontWeight.medium');
  padding: v-bind('theme.spacing.xs') v-bind('theme.spacing.md');
  border-radius: v-bind('theme.dimensions.borderRadius.full');
  border: 1px solid v-bind('theme.colors.neutral[200]');
  background-color: #ffffff;
  color: v-bind('theme.colors.neutral[700]');
  cursor: pointer;
  transition: all 0.2s ease;
}

.lise-filter-btn:hover {
  border-color: v-bind('theme.colors.primary[500]');
  color: v-bind('theme.colors.primary[500]');
}

.lise-filter-btn--active {
  background-color: v-bind('theme.colors.primary[500]');
  border-color: v-bind('theme.colors.primary[500]');
  color: #ffffff;
}

.lise-filter-btn--active:hover {
  background-color: v-bind('theme.colors.primary[600]');
  color: #ffffff;
}

/* Projects Grid */
.lise-projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.xl');
}

.lise-project-card {
  background-color: #ffffff;
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.xl');
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lise-project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.lise-project-card__header {
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-project-card__category {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xs');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.primary[500]');
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.lise-project-card__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["2xl"]');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-project-card__desc {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin-bottom: v-bind('theme.spacing.lg');
  flex: 1;
}

.lise-project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind('theme.spacing.xs');
}

.lise-project-card__tag {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xs');
  background-color: v-bind('theme.colors.neutral[100]');
  color: v-bind('theme.colors.neutral[700]');
  padding: 0.25rem 0.625rem;
  border-radius: v-bind('theme.dimensions.borderRadius.sm');
}

/* Responsive Grid */
@media (min-width: 768px) {
  .lise-projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .lise-projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>