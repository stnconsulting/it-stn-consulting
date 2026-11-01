<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { jobs } from '@/data/jobs'
import theme from '@/theme'

// --------------------------------------------------
// Navigation et récupération du Job
// --------------------------------------------------

const route = useRoute()

const jobId = computed(() => Number(route.params.id))

const job = computed(() =>
  jobs.find(item => item.id === jobId.value)
)

// --------------------------------------------------
// Transformation du texte en paragraphes et listes
// --------------------------------------------------

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

function parseContent(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = []
  const lines = content
    .split(/\r?\n/)
    .map(line => line.trim())

  let currentParagraph: string[] = []
  let currentList: string[] = []

  function flushParagraph() {
    if (currentParagraph.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: currentParagraph.join(' ')
      })
      currentParagraph = []
    }
  }

  function flushList() {
    if (currentList.length > 0) {
      blocks.push({
        type: 'list',
        items: [...currentList]
      })
      currentList = []
    }
  }

  for (const line of lines) {
    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    // Détecter les lignes commençant par un tiret
    const listMatch = line.match(/^-\s+(.+)$/)

    if (listMatch) {
      flushParagraph()
      currentList.push(listMatch[1])
    } else {
      flushList()
      currentParagraph.push(line)
    }
  }

  flushParagraph()
  flushList()

  return blocks
}

// --------------------------------------------------
// Contenu formaté
// --------------------------------------------------

const unternehmenContent = computed(() =>
  parseContent(job.value?.beschreibung.profil_unternehmen ?? '')
)

const aufgabenContent = computed(() =>
  parseContent(job.value?.beschreibung.aufgaben ?? '')
)

const anforderungenContent = computed(() =>
  parseContent(job.value?.beschreibung.anforderungen ?? '')
)

const benefitsContent = computed(() =>
  parseContent(job.value?.beschreibung.benefits ?? '')
)

// --------------------------------------------------
// Thème
// --------------------------------------------------

const neutral900 = theme.colors.neutral[900]
const neutral700 = theme.colors.neutral[700]
const neutral200 = theme.colors.neutral[200]
const neutral50 = theme.colors.neutral[50]
const primary600 = theme.colors.primary[600]
const primary900 = theme.colors.primary[900]
</script>

<template>
  <main class="job-view">

    <div v-if="job" class="job-container">

      <!-- Retour aux offres -->
      <RouterLink
        :to="{ name: 'karriere' }"
        class="back-link"
      >
        ← Zurück zu den Stellenangeboten
      </RouterLink>

      <!-- En-tête de l'offre -->
      <header class="job-header">

        <div class="job-heading">
          <div class="job-title-wrapper">
            <h1>{{ job.titel }}</h1>

            <span class="job-start">
              Startdatum: {{ job.startdatum }}
            </span>
          </div>

          <img
            v-if="job.bild"
            :src="job.bild"
            :alt="job.titel"
            class="job-image"
          />
        </div>

        <div class="job-meta">

          <span v-if="job.ort" class="meta-item">
            📍 {{ job.ort }}
          </span>

          <span v-if="job.arbeitsmodell" class="meta-item">
            {{ job.arbeitsmodell }}
          </span>

          <span v-if="job.anstellungsart" class="meta-item">
            {{ job.anstellungsart }}
          </span>

          <span v-if="job.job_volume" class="meta-item">
            {{ job.job_volume }}
          </span>

          <span v-if="job.gehalt" class="meta-item salary">
            {{ job.gehalt }}
          </span>

        </div>
      </header>

      <!-- Contenu principal -->
      <div class="job-body">

        <!-- Présentation de l'entreprise -->
        <section
          v-if="unternehmenContent.length"
          class="job-section"
        >
          <h2>Über das Unternehmen</h2>

          <template
            v-for="(block, index) in unternehmenContent"
            :key="index"
          >
            <p
              v-if="block.type === 'paragraph'"
              class="section-text"
            >
              {{ block.text }}
            </p>

            <ul v-else class="content-list">
              <li
                v-for="(item, itemIndex) in block.items"
                :key="itemIndex"
              >
                {{ item }}
              </li>
            </ul>
          </template>
        </section>

        <!-- Missions -->
        <section
          v-if="aufgabenContent.length"
          class="job-section"
        >
          <h2>Deine Aufgaben</h2>

          <template
            v-for="(block, index) in aufgabenContent"
            :key="index"
          >
            <p
              v-if="block.type === 'paragraph'"
              class="section-text"
            >
              {{ block.text }}
            </p>

            <ul v-else class="content-list">
              <li
                v-for="(item, itemIndex) in block.items"
                :key="itemIndex"
              >
                {{ item }}
              </li>
            </ul>
          </template>
        </section>

        <!-- Profil recherché -->
        <section
          v-if="anforderungenContent.length"
          class="job-section"
        >
          <h2>Dein Profil</h2>

          <template
            v-for="(block, index) in anforderungenContent"
            :key="index"
          >
            <p
              v-if="block.type === 'paragraph'"
              class="section-text"
            >
              {{ block.text }}
            </p>

            <ul v-else class="content-list">
              <li
                v-for="(item, itemIndex) in block.items"
                :key="itemIndex"
              >
                {{ item }}
              </li>
            </ul>
          </template>
        </section>

        <!-- Avantages -->
        <section
          v-if="benefitsContent.length"
          class="job-section"
        >
          <h2>Deine Benefits</h2>

          <template
            v-for="(block, index) in benefitsContent"
            :key="index"
          >
            <p
              v-if="block.type === 'paragraph'"
              class="section-text"
            >
              {{ block.text }}
            </p>

            <ul v-else class="content-list">
              <li
                v-for="(item, itemIndex) in block.items"
                :key="itemIndex"
              >
                {{ item }}
              </li>
            </ul>
          </template>
        </section>

      </div>

      <!-- Candidature -->
      <footer class="job-footer">
        <div>
          <h2>Interesse geweckt?</h2>
          <p>
            Wir freuen uns auf deine Bewerbung unter <b>info@stnconsulting.de</b>!
          </p>
        </div>

        
      </footer>

    </div>

    <!-- Offre introuvable -->
    <div v-else class="not-found">
      <h1>Stellenangebot nicht gefunden</h1>

      <p>
        Das gesuchte Stellenangebot existiert leider nicht.
      </p>

      <RouterLink :to="{ name: 'karriere' }">
        Zurück zu den Stellenangeboten
      </RouterLink>
    </div>

  </main>
</template>

<style scoped>
.job-view {
  max-width: v-bind('theme.dimensions.containerMaxWidth');
  margin: 0 auto;
  padding: v-bind('theme.spacing["2xl"]') v-bind('theme.spacing.lg');
  color: v-bind(neutral900);
}

.job-container {
  width: 100%;
}

/* Retour */
.back-link {
  display: inline-block;
  margin-bottom: v-bind('theme.spacing.xl');
  color: v-bind(primary600);
  text-decoration: none;
  font-weight: 600;
}

.back-link:hover {
  text-decoration: underline;
}

/* En-tête */
.job-header {
  padding: v-bind('theme.spacing.xl');
  background: v-bind(neutral50);
  border: 1px solid v-bind(neutral200);
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  margin-bottom: v-bind('theme.spacing.xl');
}

.job-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: v-bind('theme.spacing.lg');
}

.job-title-wrapper {
  flex: 1;
}

.job-heading h1 {
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  margin: 0 0 v-bind('theme.spacing.md');
}

.job-start {
  font-size: v-bind('theme.typography.fontSize.sm');
  color: v-bind(neutral700);
}

.job-image {
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: v-bind('theme.dimensions.borderRadius.md');
}

.job-meta {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind('theme.spacing.md');
  margin-top: v-bind('theme.spacing.xl');
}

.meta-item {
  padding: v-bind('theme.spacing.sm') v-bind('theme.spacing.md');
  background: white;
  border: 1px solid v-bind(neutral200);
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  font-size: v-bind('theme.typography.fontSize.sm');
}

.salary {
  color: v-bind(primary600);
  font-weight: 600;
}

/* Sections */
.job-body {
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.xl');
}

.job-section {
  padding: v-bind('theme.spacing.xl');
  border: 1px solid v-bind(neutral200);
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
}

.job-section h2 {
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  margin: 0 0 v-bind('theme.spacing.lg');
  padding-bottom: v-bind('theme.spacing.md');
  border-bottom: 2px solid v-bind(neutral200);
}

.section-text {
  color: v-bind(neutral700);
  line-height: 1.8;
  margin-bottom: v-bind('theme.spacing.md');
}

/* Listes */
.content-list {
  padding-left: v-bind('theme.spacing.xl');
  margin: v-bind('theme.spacing.md') 0;
  color: v-bind(neutral700);
  line-height: 1.9;
}

.content-list li {
  padding-left: v-bind('theme.spacing.xs');
  margin-bottom: v-bind('theme.spacing.sm');
}

.content-list li::marker {
  color: v-bind(primary600);
}

/* Footer / candidature */
.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: v-bind('theme.spacing.lg');
  margin-top: v-bind('theme.spacing.xl');
  padding: v-bind('theme.spacing.xl');
  background: v-bind(neutral50);
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  border: 1px solid v-bind(neutral200);
}

.job-footer h2 {
  margin: 0 0 v-bind('theme.spacing.sm');
}

.job-footer p {
  margin: 0;
  color: v-bind(neutral700);
}

.apply-button {
  display: inline-block;
  padding: v-bind('theme.spacing.md') v-bind('theme.spacing.xl');
  background: v-bind(primary600);
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  transition: background 0.2s ease;
  white-space: nowrap;
}

.apply-button:hover {
  background: v-bind(primary900);
}

/* Offre introuvable */
.not-found {
  text-align: center;
  padding: v-bind('theme.spacing["2xl"]');
}

.not-found a {
  color: v-bind(primary600);
}

/* Responsive */
@media (max-width: 768px) {
  .job-heading {
    flex-direction: column;
  }

  .job-image {
    width: 100%;
    height: 180px;
  }

  .job-footer {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .apply-button {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
