<template>
  <article class="location">
    <p class="heading location__heading">{{ title }}</p>
    <ButtonComponent
      :type="'location'"
      :design="'simple'"
      :size="'small'"
      :text="'View Properties'"
    >
      <SvgIconComponent :class="'location__button-icon'" :name="'arrow-right'"/>
    </ButtonComponent>
  </article>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import SvgIconComponent from './SvgIconComponent.vue';

export default {
  name: 'LocationComponent',
  components: { ButtonComponent, SvgIconComponent },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.location {
  @include card;
  padding: rem(33px) 0 rem(33px) rem(33px);

  &__heading {
    font-size: rem($font-size-base);

    margin-bottom: rem(8px);

    @media #{$screen-tablet} {
      font-size: rem($font-size-normal);
      margin-bottom: rem(12px);
    }

    @media #{$screen-desktop} {
      font-size: rem($font-size-medium);
    }
  }

  &__button {
    padding: 0;

    &-text {
      font-weight: $font-weight-regular;

      @media #{$screen-desktop} {
        font-size: rem($font-size-base);
      }
    }

    &-icon {
      width: rem(7px);
      height: rem(10px);
    }
  }
}
</style>
