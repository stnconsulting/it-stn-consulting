<!-- src/views/DatenschutzView.vue -->
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
      <section class="lise-datenschutz-hero">
        <div class="lise-container">
          <h1 class="lise-datenschutz-hero__title">Datenschutzerklärung</h1>
          <p class="lise-datenschutz-hero__subtitle">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
          </p>
        </div>
      </section>

      <!-- Contenu Datenschutz -->
      <section class="lise-datenschutz-content">
        <div class="lise-container">
          <div class="lise-datenschutz-card">

            <!-- 1. Datenschutz auf einen Blick -->
            <article class="lise-ds-block">
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </article>

            <!-- 2. Verantwortliche Stelle -->
            <article class="lise-ds-block">
              <h2>2. Verantwortliche Stelle</h2>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div class="lise-address-box">
                <strong>lise GmbH</strong><br />
                Märkischer Ring 92<br />
                58097 Hagen<br />
                Deutschland<br /><br />
                <strong>Telefon:</strong> 02331 - 4889720<br />
                <strong>E-Mail:</strong> <a href="mailto:info@stnconsulting.de" class="lise-link">info@stnconsulting.de</a>
              </div>
            </article>

            <!-- 3. Datenerfassung auf unserer Website -->
            <article class="lise-ds-block">
              <h2>3. Datenerfassung auf unserer Website</h2>
              
              <h3>Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3>Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Anrede, Name, E-Mail, Telefonnummer, Unternehmen, Grund der Anfrage und Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </article>

            <!-- 4. Ihre Rechte -->
            <article class="lise-ds-block">
              <h2>4. Ihre Rechte als betroffene Person</h2>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
              </p>
              <ul>
                <li><strong>Auskunft (Art. 15 DSGVO):</strong> Recht auf Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten.</li>
                <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Recht auf Unverzügliche Berichtigung unrichtiger oder Vervollständigung Ihrer Daten.</li>
                <li><strong>Löschung (Art. 17 DSGVO):</strong> Recht auf Löschung Ihrer bei uns gespeicherten Daten.</li>
                <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                <li><strong>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können eine bereits erteilte Einwilligung jederzeit für die Zukunft widerrufen.</li>
              </ul>
            </article>

            <!-- 5. Widerspruchsrecht -->
            <article class="lise-ds-block">
              <h2>5. Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)</h2>
              <p>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.
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
.lise-datenschutz-hero {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  text-align: center;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-datenschutz-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-datenschutz-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  margin: 0;
}

/* Content Section */
.lise-datenschutz-content {
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-datenschutz-card {
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.xl');
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.xl');
}

.lise-ds-block h2 {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-ds-block h3 {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.lg');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[800]');
  margin-top: v-bind('theme.spacing.md');
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-ds-block p {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-ds-block ul {
  margin: 0 0 v-bind('theme.spacing.md') v-bind('theme.spacing.lg');
  padding: 0;
}

.lise-ds-block li {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-address-box {
  background-color: v-bind('theme.colors.neutral[50]');
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  padding: v-bind('theme.spacing.md');
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[800]');
  line-height: 1.5;
}

.lise-link {
  color: v-bind('theme.colors.primary[500]');
  text-decoration: underline;
}

.lise-link:hover {
  color: v-bind('theme.colors.primary[600]');
}
</style>