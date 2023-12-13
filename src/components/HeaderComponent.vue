<template>
  <header class="page__header header">
    <div class="container container--header">
      <div class="header__row">
        <div class="header__col header__col--logo">
          <LogoComponent :place="'header'" />
        </div>

        <div class="header__col header__col--search">
          <form class="form header__form">
            <div class="form__field">
              <div class="form__field-block form__field-block--search">
                <SearchComponent />
              </div>
            </div>
          </form>
        </div>

        <div class="header__col header__col--menu">
          <MenuComponent :class="'header__menu'" :links="menuLinks"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LinkComponent from './LinkComponent.vue';
import LogoComponent from './LogoComponent.vue';
import MenuComponent from './MenuComponent.vue';
import SearchComponent from './SearchComponent.vue';
import SvgIconComponent from './SvgIconComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    SvgIconComponent,
    SearchComponent,
    LogoComponent,
    LinkComponent,
    MenuComponent
},
  data() {
    return {
      menuLinks: [
        {
          name: 'Home',
        },
        {
          name: 'About',
          path: '/#about'
        },
        {
          name: 'Reviews',
          path: '/reviews',
        },
        {
          name: 'Blog',
          path: '/articles'
        },
      ]
    }
  }
};
</script>

<style lang="scss">
.header {
  height: rem($height-header-mobile);

  box-shadow: $box-shadow-base;
  background-color: $white;

  @media #{$screen-tablet} {
    height: rem($height-header-desktop);
  }

  &__row {
    $gap: 16px;

    display: grid;
    justify-content: space-between;
    align-items: center;
    row-gap: rem($gap);

    margin-top: rem($gap);

    grid-template-areas:
    "logo menu" 
    "search search";

    @media #{$screen-tablet} {
      display: flex;
      column-gap: rem(50px);

      margin-top: 0;
    }

    @media #{$screen-desktop} {
      column-gap: rem(61px);
    }
  }

  &__col {
    @media #{$screen-tablet} {
      height: rem($height-header-desktop);

      display: flex;
      align-items: center;
    }

    &--logo {
      grid-area: logo;

      padding-left: rem($padding-small);

      @media #{$screen-tablet} {
        padding-left: 0;
      }
    }

    &--menu{
      grid-area: menu;

      padding-right: rem(20px);
    }

    &--search {
      grid-area: search;

      @media #{$screen-tablet} {
        width: 100%;
      }
    }
  }

  &__form {
    width: 100%;
  }
}
</style>
