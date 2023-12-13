<template>
  <PageContainerComponent :breadcrumbs="breadcrumbs" :heading="heading">
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
  </PageContainerComponent>
</template>

<script>
import PageContainerComponent from '@/components/PageContainerComponent.vue';
import ReviewCardComponent from '@/components/ReviewCardComponent.vue';

export default {
  name: 'ReviewsView',
  components: { 
    PageContainerComponent, 
    ReviewCardComponent 
  },
  data() {
    return {
      breadcrumbs: [
        {
          page: 'Main',
          path: '/',
        },
        {
          page: 'Reviews',
          path: '/reviews',
        },
      ],
      heading: 'What customers say',
    };
  },
  computed: {
    reviews() {
      return this.$store.getters['getReviews'];
    },
  },
};
</script>

<style lang="scss" scoped></style>
