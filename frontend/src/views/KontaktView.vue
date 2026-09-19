<!-- src/views/ContactView.vue -->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { theme } from '@/theme'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'

interface ContactForm {
  anrede: string
  vorname: string
  nachname: string
  email: string
  telefonnummer: string
  unternehmen: string
  grundDerAnfrage: string
  nachricht: string
  datenschutzAkzeptiert: boolean
}

const form = reactive<ContactForm>({
  anrede: 'herr',
  vorname: '',
  nachname: '',
  email: '',
  telefonnummer: '',
  unternehmen: '',
  grundDerAnfrage: 'allgemein',
  nachricht: '',
  datenschutzAkzeptiert: false,
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = () => {
  if (!form.datenschutzAkzeptiert) {
    alert('Bitte akzeptieren Sie die Datenschutzhinweise.')
    return
  }

  isSubmitting.value = true

  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
  }, 1000)
}
</script>

<template>
  <div class="lise-layout">
    <HeaderNavbar logoText="STN ENTERPRISES GmbH" />

    <main class="lise-main">
      <!-- Section En-tête -->
      <section class="lise-contact-hero">
        <div class="lise-container">
          <h1 class="lise-contact-hero__title">Kontaktieren Sie uns</h1>
          <p class="lise-contact-hero__subtitle">
            Haben Sie Fragen oder ein konkretes Softwareprojekt? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      <!-- Section Contact (Infos + Formulaire) -->
      <section class="lise-contact-section">
        <div class="lise-container lise-contact-grid">
          
          <!-- Bloc Coordonnées & Adresse -->
          <aside class="lise-contact-info-card">
            <h2 class="lise-info-title">Kontaktinformationen</h2>
            
            <div class="lise-info-block">
              <span class="lise-info-icon">📍</span>
              <div>
                <h3 class="lise-info-label">Unsere Anschrift</h3>
                <p class="lise-info-text">
                  STN ENTERPRISES GmbH<br />
                  Märkischer Ring 92<br />
                  58097 Hagen<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div class="lise-info-block">
              <span class="lise-info-icon">📞</span>
              <div>
                <h3 class="lise-info-label">Telefon</h3>
                <p class="lise-info-text">
                  <a href="tel:023314889720" class="lise-info-link">02331 - 4889720</a>
                </p>
              </div>
            </div>
          </aside>

          <!-- Formulaire de Contact -->
          <div class="lise-contact-card">
            <div v-if="isSubmitted" class="lise-success-message">
              <span class="lise-success-icon">✓</span>
              <h2>Vielen Dank für Ihre Anfrage!</h2>
              <p>Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.</p>
            </div>

            <form v-else class="lise-form" @submit.prevent="handleSubmit">
              <!-- Row 1: Anrede & Grund der Anfrage -->
              <div class="lise-form-row">
                <div class="lise-form-group">
                  <label for="anrede" class="lise-label">Anrede *</label>
                  <select id="anrede" v-model="form.anrede" class="lise-input" required>
                    <option value="herr">Herr</option>
                    <option value="frau">Frau</option>
                    <option value="divers">Divers</option>
                  </select>
                </div>

                <div class="lise-form-group">
                  <label for="grund" class="lise-label">Grund der Anfrage *</label>
                  <select id="grund" v-model="form.grundDerAnfrage" class="lise-input" required>
                    <option value="allgemein">Allgemeine Anfrage</option>
                    <option value="softwareentwicklung">Individuelle Softwareentwicklung</option>
                    <option value="cloud">Cloud & DevOps Integration</option>
                    <option value="beratung">IT-Beratung & Architektur</option>
                  </select>
                </div>
              </div>

              <!-- Row 2: Vorname & Nachname -->
              <div class="lise-form-row">
                <div class="lise-form-group">
                  <label for="vorname" class="lise-label">Vorname *</label>
                  <input 
                    id="vorname" 
                    v-model="form.vorname" 
                    type="text" 
                    class="lise-input" 
                    placeholder="Erika" 
                    required 
                  />
                </div>

                <div class="lise-form-group">
                  <label for="nachname" class="lise-label">Nachname *</label>
                  <input 
                    id="nachname" 
                    v-model="form.nachname" 
                    type="text" 
                    class="lise-input" 
                    placeholder="Mustermann" 
                    required 
                  />
                </div>
              </div>

              <!-- Row 3: Email & Telefonnummer -->
              <div class="lise-form-row">
                <div class="lise-form-group">
                  <label for="email" class="lise-label">E-Mail-Adresse *</label>
                  <input 
                    id="email" 
                    v-model="form.email" 
                    type="email" 
                    class="lise-input" 
                    placeholder="erika.mustermann@unternehmen.de" 
                    required 
                  />
                </div>

                <div class="lise-form-group">
                  <label for="telefon" class="lise-label">Telefonnummer</label>
                  <input 
                    id="telefon" 
                    v-model="form.telefonnummer" 
                    type="tel" 
                    class="lise-input" 
                    placeholder="+49 123 4567890" 
                  />
                </div>
              </div>

              <!-- Row 4: Unternehmen -->
              <div class="lise-form-group">
                <label for="unternehmen" class="lise-label">Unternehmen</label>
                <input 
                  id="unternehmen" 
                  v-model="form.unternehmen" 
                  type="text" 
                  class="lise-input" 
                  placeholder="Firma / Organisation GmbH" 
                />
              </div>

              <!-- Row 5: Nachricht -->
              <div class="lise-form-group">
                <label for="nachricht" class="lise-label">Wie können wir Ihnen helfen? *</label>
                <textarea 
                  id="nachricht" 
                  v-model="form.nachricht" 
                  class="lise-textarea" 
                  rows="5" 
                  placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..." 
                  required
                ></textarea>
              </div>

              <!-- Notice & Datenschutz -->
              <div class="lise-notice-box">
                <p class="lise-notice-text">
                  STN ENTERPRISES GmbH benötigt die Kontaktinformationen, die Sie uns zur Verfügung stellen, um Sie bezüglich unserer Produkte und Dienstleistungen zu kontaktieren. Sie können sich jederzeit von diesen Benachrichtigungen abmelden. Informationen zum Abbestellen, den Umgang mit Ihren Daten sowie unsere Datenschutzpraktiken und unsere Verpflichtung zum Schutz Ihrer Privatsphäre finden Sie in unseren 
                  <RouterLink to="/datenschutz" class="lise-link">Datenschutzbestimmungen</RouterLink>.
                </p>

                <label class="lise-checkbox-label">
                  <input 
                    v-model="form.datenschutzAkzeptiert" 
                    type="checkbox" 
                    required 
                  />
                  <span>Ich habe die Datenschutzhinweise zur Kenntnis genommen und stimme zu. *</span>
                </label>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                class="lise-btn lise-btn--primary" 
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht absenden' }}
              </button>
            </form>
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
.lise-contact-hero {
  background-color: v-bind('theme.colors.neutral[50]');
  padding: v-bind('theme.spacing["2xl"]') 0;
  text-align: center;
  border-bottom: 1px solid v-bind('theme.colors.neutral[200]');
}

.lise-contact-hero__title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize["3xl"]');
  font-weight: v-bind('theme.typography.fontWeight.bold');
  color: v-bind('theme.colors.neutral[900]');
  margin-bottom: v-bind('theme.spacing.sm');
}

.lise-contact-hero__subtitle {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.lg');
  color: v-bind('theme.colors.neutral[700]');
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Contact Grid Section */
.lise-contact-section {
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.xl');
  align-items: start;
}

/* Sidebar Info Card */
.lise-contact-info-card {
  background-color: v-bind('theme.colors.neutral[50]');
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.xl');
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.lg');
}

.lise-info-title {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xl');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin: 0;
}

.lise-info-block {
  display: flex;
  gap: v-bind('theme.spacing.md');
}

.lise-info-icon {
  font-size: 1.5rem;
}

.lise-info-label {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.sm');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
  margin: 0 0 v-bind('theme.spacing.xs') 0;
}

.lise-info-text {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.5;
  margin: 0;
}

.lise-info-link {
  color: v-bind('theme.colors.primary[500]');
  text-decoration: none;
  font-weight: v-bind('theme.typography.fontWeight.medium');
}

.lise-info-link:hover {
  text-decoration: underline;
}

/* Form Card */
.lise-contact-card {
  background-color: #ffffff;
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.lg');
  padding: v-bind('theme.spacing.xl');
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.lise-form {
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.lg');
}

.lise-form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: v-bind('theme.spacing.md');
}

.lise-form-group {
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.xs');
}

.lise-label {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.sm');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  color: v-bind('theme.colors.neutral[900]');
}

.lise-input,
.lise-textarea {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  padding: 0.625rem 0.875rem;
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  background-color: #ffffff;
  color: v-bind('theme.colors.neutral[900]');
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.lise-input:focus,
.lise-textarea:focus {
  border-color: v-bind('theme.colors.primary[500]');
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
}

/* Notice Box */
.lise-notice-box {
  background-color: v-bind('theme.colors.neutral[50]');
  border: 1px solid v-bind('theme.colors.neutral[200]');
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  padding: v-bind('theme.spacing.md');
  display: flex;
  flex-direction: column;
  gap: v-bind('theme.spacing.sm');
}

.lise-notice-text {
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xs');
  color: v-bind('theme.colors.neutral[700]');
  line-height: 1.6;
  margin: 0;
}

.lise-checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: v-bind('theme.spacing.xs');
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.xs');
  color: v-bind('theme.colors.neutral[900]');
  font-weight: v-bind('theme.typography.fontWeight.medium');
  cursor: pointer;
}

.lise-checkbox-label input {
  margin-top: 0.125rem;
}

.lise-link {
  color: v-bind('theme.colors.primary[500]');
  text-decoration: underline;
}

.lise-btn--primary {
  background-color: v-bind('theme.colors.primary[500]');
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: v-bind('theme.dimensions.borderRadius.md');
  font-family: v-bind('theme.typography.fontFamily.sans');
  font-size: v-bind('theme.typography.fontSize.base');
  font-weight: v-bind('theme.typography.fontWeight.semibold');
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: flex-start;
}

.lise-btn--primary:hover:not(:disabled) {
  background-color: v-bind('theme.colors.primary[600]');
}

.lise-btn--primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Success Message */
.lise-success-message {
  text-align: center;
  padding: v-bind('theme.spacing["2xl"]') 0;
}

.lise-success-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background-color: v-bind('theme.colors.status.success');
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: v-bind('theme.spacing.md');
}

/* Responsive Desktop Layout */
@media (min-width: 1024px) {
  .lise-contact-grid {
    grid-template-columns: 1fr 2fr;
  }
}

@media (min-width: 640px) {
  .lise-form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>