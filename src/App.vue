<template>
  <div id="app" class="page">
    <HeaderComponent />
    <router-view/>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>


<style lang="scss">

</style>
