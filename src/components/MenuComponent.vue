<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item" v-for="link in links" :key="link.name">
        <LinkComponent :text="link.name" :path="link.path" />
      </li>
    </ul>
  </nav>
</template>

<script>
import LinkComponent from './LinkComponent.vue';

export default { 
  name: 'MenuComponent',
  components: { LinkComponent },
  props: {
    links: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style lang="scss">
.menu {
  &__list {
    @include list-reset;

    flex-direction: row;
    column-gap: rem(15px);

    @media #{$screen-desktop} {
      column-gap: rem(30px);
    }
  }
}
</style>
