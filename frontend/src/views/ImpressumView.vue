<!-- src/views/ImpressumView.vue -->
<script setup lang="ts">
import { theme } from '@/theme'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <div class="lise-layout">
    <HeaderNavbar />

    <main class="lise-main">
      <!-- Section En-tête -->
      <section class="lise-impressum-hero">
        <div class="lise-container">
          <h1 class="lise-impressum-hero__title">Impressum</h1>
          <p class="lise-impressum-hero__subtitle">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      <!-- Contenu Légal -->
      <section class="lise-impressum-content">
        <div class="lise-container">
          <div class="lise-impressum-card">
            
            <article class="lise-impressum-block">
              <h2>Diensteanbieter</h2>
              <p>
                <strong>lise GmbH</strong><br />
                Märkischer Ring 92<br />
                58097 Hagen<br />
                Deutschland
              </p>
            </article>

            <article class="lise-impressum-block">
              <h2>Kontaktmöglichkeiten</h2>
              <p>
                <strong>Telefon:</strong> 02331 - 4889720<br />
                <strong>E-Mail:</strong> <a href="mailto:info@stnconsulting.de" class="lise-link">info@stnconsulting.de</a>
              </p>
            </article>

            <article class="lise-impressum-block">
              <h2>Vertretungsberechtigte Personen</h2>
              <p>
                <strong>Geschäftsführung:</strong> Dipl.-Inform. Manuel van Ray, Thomas Frechen
              </p>
            </article>

            <article class="lise-impressum-block">
              <h2>Registereintrag</h2>
              <p>
                <strong>Registergericht:</strong> Amtsgericht Hagen<br />
                <strong>Registernummer:</strong> HRB 12345
              </p>
            </article>

            <article class="lise-impressum-block">
              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong>DE 123 456 789</strong>
              </p>
            </article>

            <article class="lise-impressum-block">
              <h2>Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" class="lise-link">
                  https://ec.europa.eu/consumers/odr
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
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
.lise-impressum-hero {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  text-align: center;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-impressum-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-impressum-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  margin: 0;
}

/* Content Section */
.lise-impressum-content {
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-impressum-card {
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.xl');
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.lg');
}

.lise-impressum-block h2 {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.lg');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-impressum-block p {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin: 0;
}

.lise-link {
  color: v-bind('theme.colors.primary[500]');
  text-decoration: underline;
}

.lise-link:hover {
  color: v-bind('theme.colors.primary[600]');
}
</style>