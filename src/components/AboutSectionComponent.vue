<template>
  <section class="section about" id="about">
    <div class="container">
      <div class="section__wrap">
        <div class="about__cards">
          <ul class="about__list">
            <li class="about__item" v-for="card in cards" :key="card.title">
              <AboutCardComponent
                :title="card.title"
                :subtitle="card.subtitle"
                :image="card.image"
                :text="card.text"
                :buttonText="card.buttonText"
                :position="card.position"
                :isSubtitleHidden="card.isSubtitleHidden"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutCardComponent from './AboutCardComponent.vue';

export default {
  name: 'AboutSectionComponent',
  components: { AboutCardComponent },
  data() {
    return {
      cards: [
        {
          image: 'interior.jpeg',
          title: 'The best houses for family comfort',
          subtitle: 'Comfort first',
          text: `Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.`,
          buttonText: 'Explore properties',
          isSubtitleHidden: true,
          position: 'right',
        },
        {
          image: 'interior-1.jpeg',
          title: 'Fast forward process',
          subtitle: 'Quick and easy',
          text: 'Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.',
          buttonText: 'Explore properties',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  &__list {
    @include list-reset;

    row-gap: rem($gap-normal);

    @media #{$screen-tablet} {
      row-gap: rem($gap-medium);
    }

    @media #{$screen-desktop} {
      row-gap: rem($gap-huge);
    }
  }
}
</style>
