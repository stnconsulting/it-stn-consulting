<script setup lang="ts">
import theme from '@/theme'
import type { Job } from '@/types/job'

defineProps<{
  job: Job
}>()
</script>

<template>
  <article class="job-card">
   

    <div class="job-content">
      <h2 class="job-title">
        {{ job.titel }}
      </h2>

      <p class="job-description">
        {{ job.beschreibung.profil_unternehmen }}
      </p>

      <div class="job-details">
        <span class="job-location">
          📍 {{ job.ort }}
        </span>

        <span class="job-salary">
          {{ job.gehalt }}
        </span>
      </div>

     <RouterLink
        class="apply-button"
        :to="{
            name: 'jobview',
            params: { id: job.id }
        }"
        >
        Details ansehen
    </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.job-card {
  display: flex;
  flex-direction: column;
  background: v-bind('theme.colors.neutral[50]');
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
}

.job-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.job-content {
  display: flex;
  flex-direction: column;
  padding: v-bind('theme.spacing.lg');
  flex: 1;
}

.job-title {
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.job-description {
  font-size: v-bind('theme.typography.fontSize.sm');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin-bottom: v-bind('theme.spacing.lg');
  flex: 1;
}

.job-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: v-bind('theme.spacing.sm');
  font-size: v-bind('theme.typography.fontSize.sm');
  margin-bottom: v-bind('theme.spacing.lg');
  color: v-bind('theme.colors.neutral[700]');
}

.job-salary {
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.primary[600]');
}


.apply-button {
  display: block;
  width: 90%;
  padding: v-bind('theme.spacing.md');
  background: v-bind('theme.colors.primary[600]');
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  cursor: pointer;
  margin-top: auto;
  transition: background 0.2s ease;
}


.apply-button:hover {
  background: v-bind('theme.colors.primary[900]');
}
</style>
