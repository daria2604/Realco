<template>
  <main class="page__content content final">
    <BannerComponent />
    <AboutSectionComponent />
    <TrendsComponent />
    <ReviewsComponent />
    <ArticlesComponent />
  </main>
</template>

<script>
import AboutSectionComponent from '@/components/AboutSectionComponent.vue';
import ArticlesComponent from '@/components/ArticlesComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import ReviewsComponent from '@/components/ReviewsComponent.vue';
import SvgIconComponent from '@/components/SvgIconComponent.vue';
import TrendsComponent from '@/components/TrendsComponent.vue';

export default {
  components: {
    SvgIconComponent,
    BannerComponent,
    ReviewsComponent,
    TrendsComponent,
    ArticlesComponent,
    AboutSectionComponent,
  },
};
</script>

<style lang="scss" scoped>
.final {
  padding: 0;
}
</style>
