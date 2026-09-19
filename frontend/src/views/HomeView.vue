
<script setup lang="ts">

import HeaderNavbar from '../components/HeaderNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import MainFooter from '../components/MainFooter.vue'
import { useUiStore } from '../stores/useUiStore'


const uiStore = useUiStore()

const handleCta = () => {
  uiStore.openContactModal()
}
</script>

<template>
  <div>
    <HeaderNavbar logoText="STN ENTERPRISES GmbH" />
    <main>
      <HeroSection 
        title="Maßgeschneiderte Softwarelösungen" 
        @cta-click="handleCta"
      />
    </main>
  </div>
  <MainFooter companyName="STN ENTERPRISES GmbH" />
</template>