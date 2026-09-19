<!-- src/views/AGBView.vue -->
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
      <section class="lise-agb-hero">
        <div class="lise-container">
          <h1 class="lise-agb-hero__title">Allgemeine Geschäftsbedingungen</h1>
          <p class="lise-agb-hero__subtitle">
            AGB für IT-Dienstleistungen und Softwareentwicklung der lise GmbH
          </p>
        </div>
      </section>

      <!-- Contenu AGB -->
      <section class="lise-agb-content">
        <div class="lise-container">
          <div class="lise-agb-card">

            <!-- § 1 Geltungsbereich -->
            <article class="lise-agb-block">
              <h2>§ 1 Geltungsbereich & Vertragspartner</h2>
              <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und Angebote der <strong>lise GmbH</strong> (Märkischer Ring 92, 58097 Hagen, nachfolgend „Auftragnehmer“ genannt) gegenüber ihren Vertragspartnern (nachfolgend „Auftraggeber“ genannt).
              </p>
              <p>
                (2) Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen.
              </p>
            </article>

            <!-- § 2 Vertragsgegenstand & Leistungsumfang -->
            <article class="lise-agb-block">
              <h2>§ 2 Vertragsgegenstand & Leistungsumfang</h2>
              <p>
                (1) Gegenstand des Vertrages ist die Erbringung von Dienstleistungen im Bereich der Softwareentwicklung, IT-Beratung, Cloud-Infrastruktur und UI/UX-Design gemäß dem jeweiligen Einzelauftrag oder Angebot.
              </p>
              <p>
                (2) Der genaue Leistungsumfang, Termine sowie spezifische Anforderungen werden in individuellen Angeboten oder Leistungsbeschreibungen schriftlich festgelegt.
              </p>
            </article>

            <!-- § 3 Mitwirkungspflichten des Auftraggebers -->
            <article class="lise-agb-block">
              <h2>§ 3 Mitwirkungspflichten des Auftraggebers</h2>
              <p>
                (1) Der Auftraggeber unterstützt den Auftragnehmer bei der Erbringung der vertraglich geschuldeten Leistungen durch rechtzeitige und unentgeltliche Bereitstellung aller erforderlichen Informationen, Daten, Zugänge und Ansprechpartner.
              </p>
              <p>
                (2) Verzögerungen, die durch eine verspätete oder unvollständige Mitwirkung des Auftraggebers entstehen, führen zu einer entsprechenden Verschiebung der vereinbarten Ausführungstermine.
              </p>
            </article>

            <!-- § 4 Vergütung & Zahlungsbedingungen -->
            <article class="lise-agb-block">
              <h2>§ 4 Vergütung & Zahlungsbedingungen</h2>
              <p>
                (1) Die Vergütung richtet sich nach dem im jeweiligen Einzelvertrag vereinbarten Festpreis oder nach Aufwand auf Basis der aktuellen Stundensätze des Auftragnehmers. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
              <p>
                (2) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig, sofern nicht anders schriftlich vereinbart.
              </p>
            </article>

            <!-- § 5 Nutzungs- & Urheberrechte -->
            <article class="lise-agb-block">
              <h2>§ 5 Nutzungs- & Urheberrechte</h2>
              <p>
                (1) Der Auftragnehmer räumt dem Auftraggeber mit vollständiger Bezahlung der geschuldeten Vergütung das einfache, übertragbare und zeitlich unbeschränkte Recht ein, die im Rahmen des Auftrags erstellte Software für eigene Geschäftszwecke zu nutzen.
              </p>
              <p>
                (2) Die Einräumung ausschließlicher Nutzungsrechte bedarf einer ausdrücklichen schriftlichen Vereinbarung im Einzelvertrag.
              </p>
            </article>

            <!-- § 6 Haftung -->
            <article class="lise-agb-block">
              <h2>§ 6 Haftung & Mängelhaftung</h2>
              <p>
                (1) Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
              </p>
              <p>
                (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung des Auftragnehmers auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
            </article>

            <!-- § 7 Schlussbestimmungen -->
            <article class="lise-agb-block">
              <h2>§ 7 Schlussbestimmungen & Gerichtsstand</h2>
              <p>
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
              </p>
              <p>
                (2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Hagen, Westfalen.
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
.lise-agb-hero {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  text-align: center;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-agb-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.xs');
}

.lise-agb-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  margin: 0;
}

/* Content Section */
.lise-agb-content {
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-agb-card {
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

.lise-agb-block h2 {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-agb-block p {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin-bottom: v-bind('theme.spacing.sm');
}
</style>