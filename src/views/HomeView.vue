<template>
  <div style="background-color: #1C1C1C;">
    <PrimarySection></PrimarySection>
  </div>
  <div>
    <About></About>
  </div>
  <div style="background-color: #E8E8E8;">
    <Modalidades></Modalidades>
  </div>
  <div>
    <Contact></Contact>
  </div>
  <div style="background-color: #E8E8E8;">
    <MapsComponent></MapsComponent>
  </div>
  <div style="background-color: #1C1C1C;">
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navigate from '@/components/Navigate.vue';
import PrimarySection from '@/components/PrimarySection.vue';
import About from '@/components/About.vue';
import Modalidades from '@/components/Modalidades.vue';
import Contact from '@/components/Contact.vue';	
import MapsComponent from '@/components/MapsComponent.vue';	
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomePage',
  components: {
    Navigate,
    PrimarySection,
    About,
    Modalidades,
    FooterComponent,
    Contact,
    MapsComponent
  }
};
</script>
