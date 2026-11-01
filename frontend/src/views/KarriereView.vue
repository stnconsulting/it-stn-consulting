
<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'
import { jobs } from '@/data/jobs'
import theme from '@/theme'

// Couleurs
const neutral900 = theme.colors.neutral[900]
const neutral700 = theme.colors.neutral[700]

// Typographie
const fontSize3xl = theme.typography.fontSize['3xl']
const fontSize2xl = theme.typography.fontSize['2xl']
const fontSizeLg = theme.typography.fontSize.lg
const fontSizeSm = theme.typography.fontSize.sm

const fontWeightBold = theme.typography.fontWeight.bold
const fontWeightSemibold = theme.typography.fontWeight.semibold
</script>

<template>
  <main class="karriere-page">
    <section class="karriere-header">
      <h1>Karriere</h1>
      <p>
        Entdecke unsere aktuellen Stellenangebote und werde Teil unseres Teams.
      </p>
    </section>

    <section class="jobs-section">
      <div class="jobs-header">
        <h2>Aktuelle Stellenangebote</h2>
        <span>{{ jobs.length }} offene Stellen</span>
      </div>

      <div class="jobs-grid">
        <JobCard
          v-for="job in jobs"
          :key="job.id"
          :job="job"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.karriere-page {
  max-width: v-bind('theme.dimensions.containerMaxWidth');
  margin: 0 auto;
  padding: v-bind('theme.spacing["2xl"]') v-bind('theme.spacing.lg');
}

.karriere-header {
  text-align: center;
  margin-bottom: v-bind('theme.spacing["2xl"]');
}

.karriere-header h1 {
  font-size: v-bind(fontSize3xl);
  font-weight: v-bind(fontWeightBold);
  color: v-bind(neutral900);
  margin-bottom: v-bind('theme.spacing.md');
}

.karriere-header p {
  font-size: v-bind(fontSizeLg);
  color: v-bind(neutral700);
}

.jobs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: v-bind('theme.spacing.md');
  margin-bottom: v-bind('theme.spacing.xl');
}

.jobs-header h2 {
  font-size: v-bind(fontSize2xl);
  font-weight: v-bind(fontWeightSemibold);
  color: v-bind(neutral900);
}

.jobs-header span {
  font-size: v-bind(fontSizeSm);
  color: v-bind(neutral700);
}

.jobs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.lg');
}

@media (min-width: 768px) {
  .jobs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .jobs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
