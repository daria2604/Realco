<template>
  <footer class="page__footer footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__col footer__col--links">
          <LinksComponent :type="'socials'" :items="socialIcons" />

          <LinksComponent :type="'links--footer'" :items="links" />
        </div>

        <div class="footer__col footer__col--logo">
          <LogoComponent :place="'footer'" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LinksComponent from './LinksComponent.vue';
import LogoComponent from './LogoComponent.vue';
import SocialIconComponent from './SocialIconComponent.vue';
import SvgIconComponent from './SvgIconComponent.vue';

export default {
  name: 'FooterComponent',
  components: {
    SvgIconComponent,
    SocialIconComponent,
    LinksComponent,
    LogoComponent,
  },
  computed: {
    links() {
      return this.$store.getters['getLinks'];
    },
  },

  data() {
    return {
      socialIcons: [
        {
          id: 0,
          name: 'facebook',
        },
        {
          id: 1,
          name: 'instagram',
        },
        {
          id: 2,
          name: 'twitter',
        },
        {
          id: 2,
          name: 'linkedin',
        },
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: rem($padding-small);
  padding-bottom: rem($padding-small);

  background-color: $white;
  box-shadow: $box-shadow-base;

  @media #{$screen-tablet} {
    padding-top: rem($footer-padding);
    padding-bottom: rem($footer-padding);
  }

  &__row {
    @include flex-column; 

    row-gap: rem($gap-normal);

    @media #{$screen-tablet} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__col {
    @include flex-column; 

    align-items: center;

    &--links {
      row-gap: rem($gap-normal);

      @media #{$screen-tablet} {
        flex-direction: row;
        column-gap: rem($gap-large);
        padding: 0;

        border: none;
      }
    }

    &--logo {
      @media #{$screen-tablet} {
        margin-left: rem(85px);
        justify-self: flex-end;
      }
    }
  }
}
</style>
