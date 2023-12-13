<template>
  <SectionComponent
    :section="'trends'"
    :title="title"
    :hasButton="false"
  >
    <div class="trends__content">
      <ul class="trends__list">
        <li class="trends__item" v-for="trend in trends" :key="trend.id">
          <TrendsCardComponent
            :iconName="trend.icon"
            :title="trend.title"
            :text="trend.text"
          />
        </li>
      </ul>
    </div>
  </SectionComponent>
</template>

<script>
import SectionComponent from './SectionComponent.vue';
import TrendsCardComponent from './TrendsCardComponent.vue';

export default {
  name: 'TrendsComponent',
  components: {
    SectionComponent,
    TrendsCardComponent,
  },
  computed: {
    trends() {
      return this.$store.getters['getTrends'];
    },
  },
  data() {
    return {
      title: 'How it works',
    };
  },
};
</script>

<style lang="scss" scoped>
.trends {
  background-color: $white;
  
  &__list {
    @include list-reset;

    row-gap: rem($gap-normal);

    @media #{$screen-tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: rem(30px) rem(48px);
    }

    @media #{$screen-desktop} {
      grid-template-columns: repeat(3, 1fr);
      gap: rem(32px) rem(50px);
    }
  }
}
</style>
