<template>
  <div :class="`links ${type}`">
    <ul class="links__list socials__list" v-if="type === 'socials'">
      <li :class="`${type}__item`" v-for="item in items" :key="item.id">
        <SocialIconComponent :name="item.name" />
      </li>
    </ul>

    <ul class="links__list links__list--footer" v-if="type === 'links--footer'">
      <li :class="`links__item`" v-for="item in items" :key="item.id">
        <LinkComponent :text="item.text" />
      </li>
    </ul>
  </div>
</template>

<script>
import LinkComponent from './LinkComponent.vue';
import SocialIconComponent from './SocialIconComponent.vue';

export default {
  name: 'LinksComponent',
  components: { 
    SocialIconComponent, 
    LinkComponent,
  },
  props: {
    type: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.links {
  &--footer {
    width: 100%;

    @media #{$screen-desktop} {
      padding-left: rem($gap-large);

      border-left: $border;
    }
  }

  &__list {
    @include list-reset;

    align-items: center;
    justify-content: center;
    row-gap: rem($gap-normal);

    @media #{$screen-tablet} {
      flex-direction: row;
      justify-content: flex-start;
      column-gap: rem($gap-medium);

      height: rem($height-footer-desktop - 2 * $footer-padding);
    }

    &--footer {
      padding-top: rem($padding-small);
      padding-bottom: rem($padding-small);

      border-top: $border;
      border-bottom: $border;

      @media #{$screen-tablet} {
        padding-top: 0;
        padding-bottom: 0;

        border: 0;
      }
    }
  }
}
</style>
