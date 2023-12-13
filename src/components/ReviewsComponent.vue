<template>
  <SectionComponent :title="title" :section="'reviews reviews--final reviews--background'" :path="'/reviews'">
    <div class="reviews__content">
      <ul class="reviews__list">
        <li class="reviews__item" v-for="review in reviews" :key="review.id">
          <router-link to="/reviews" class="reviews__link">
            <ReviewCardComponent
              :avatar="review.avatar"
              :name="review.name"
              :text="review.text"
              :about="review.about"
            />
          </router-link>

        </li>
      </ul>
    </div>
  </SectionComponent>
</template>

<script>
import ReviewCardComponent from './ReviewCardComponent.vue';
import SectionComponent from './SectionComponent.vue';

export default {
  components: {
    ReviewCardComponent,
    SectionComponent,
  },

  data() {
    return {
      title: 'What customers say',
    };
  },

  computed: {
    reviews() {
      return this.$store.getters['getReviews'];
    },
  },
};
</script>

<style lang="scss">
.reviews {
  &__list {
    @include list-reset;

    flex-direction: column;
    align-items: center;
    row-gap: rem($gap-normal);

    @media #{$screen-tablet} {
      flex-direction: row;
      column-gap: rem(16px);
    }

    @media #{$screen-desktop} {
      column-gap: rem($gap-large);
    }
  }

  &__content {
    margin-bottom: rem($gap-normal);

    @media #{$screen-tablet} {
      margin-bottom: 0;
    }
  }

  &__link {
    &:hover {
      text-decoration: none;
    }
  }

  &__item {
    &:hover {
      transform: translateY(-10px) 
    }
  }
}
</style>
