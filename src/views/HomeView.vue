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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navigate from '@/components/Navigate.vue';
import PrimarySection from '@/components/PrimarySection.vue';
import About from '@/components/About.vue';
import Modalidades from '@/components/Modalidades.vue';

@Options({
  components: {
    Navigate,
    PrimarySection,
    About,
    Modalidades
  },
})
export default class HomeView extends Vue {}
</script>
