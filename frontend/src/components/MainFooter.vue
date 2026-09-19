<!-- src/components/MainFooter.vue -->
<script setup lang="ts">
import { theme } from '@/theme'

defineProps<{
  companyName?: string
}>()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="lise-footer">
    <div class="lise-container lise-footer__grid">
      <!-- Colonne 1: Infos Entreprise -->
      <div class="lise-footer__col">
        <a href="#" class="lise-footer__logo">
          {{ companyName || 'lise GmbH' }}
        </a>
        <p class="lise-footer__desc">
          Consulting IT & Digitalisierung Projekte Handeln für Ihren Erfolg.
        </p>
      </div>

      <!-- Colonne 2: Navigation rapide -->
      <div class="lise-footer__col">
        <h4 class="lise-footer__title">Navigation</h4>
        <ul class="lise-footer__links">
          <li><a href="/leistungen" class="lise-footer__link">Leistungen</a></li>
          <li><a href="/projekte" class="lise-footer__link">Projekte</a></li>
          <li><a href="/ueber-uns" class="lise-footer__link">Über uns</a></li>
          <li><a href="/kontakt" class="lise-footer__link">Kontakt</a></li>
        </ul>
      </div>

      <!-- Colonne 3: Liens légaux & Social -->
      <div class="lise-footer__col">
        <h4 class="lise-footer__title">Rechtliches</h4>
        <ul class="lise-footer__links">
          <li><a href="/impressum" class="lise-footer__link">Impressum</a></li>
          <li><a href="/datenschutz" class="lise-footer__link">Datenschutz</a></li>
          <li><a href="/agb" class="lise-footer__link">AGB</a></li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="lise-footer__bottom">
      <div class="lise-container">
        <p class="lise-footer__copyright">
          &copy; {{ currentYear }} {{ companyName || 'lise GmbH' }}. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.lise-footer {
  background-color: v-bind('theme.colors.neutral[900]');
  color: v-bind('theme.colors.neutral[50]');
  padding-top: v-bind('theme.spacing["2xl"]');
  border-top: 1px solid v-bind('theme.colors.neutral[800]');
}

.lise-container {
  max-width: v-bind('theme.dimensions.containerMaxWidth');
  margin: 0 auto;
  padding: 0 v-bind('theme.spacing.md');
}

.lise-footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.xl');
  padding-bottom: v-bind('theme.spacing["2xl"]');
}

.lise-footer__logo {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-footer__desc {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.sm');
  color: v-bind('theme.colors.neutral[200]');
  line-height: 1.5;
  margin: 0;
}

.lise-footer__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: #ffffff;
  margin-top: 0;
  margin-bottom: v-bind('theme.spacing.md');
}

.lise-footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.sm');
}

.lise-footer__link {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.sm');
  color: v-bind('theme.colors.neutral[200]');
  text-decoration: none;
  transition: color 0.2s ease;
}

.lise-footer__link:hover {
  color: v-bind('theme.colors.primary[500]');
}

.lise-footer__bottom {
  border-top: 1px solid v-bind('theme.colors.neutral[800]');
  padding: v-bind('theme.spacing.md') 0;
  text-align: center;
}

.lise-footer__copyright {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xs');
  color: v-bind('theme.colors.neutral[200]');
  margin: 0;
}

/* Layout Desktop */
@media (min-width: 768px) {
  .lise-footer__grid {
    grid-template-columns: 2fr 1fr 1fr;
    gap: v-bind('theme.spacing["2xl"]');
  }

  .lise-footer__bottom {
    text-align: left;
  }
}
</style>