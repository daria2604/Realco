<template>
  <div :class="`logo logo--${place}`">
    <router-link to="/" class="logo__link">
      <img
        class="logo__image"
        src="../assets/images/logo.svg"
        alt="Realco logo"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent',
  props: {
    place: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.logo {
  width: rem(135px);

  overflow: hidden;

  &--footer {
    display: flex;
    justify-content: center;

    @media #{$screen-tablet} {
      justify-content: flex-end;
    }
  }

  &__link {
    display: block;
  }
}
</style>
