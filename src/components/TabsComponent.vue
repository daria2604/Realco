<template>
  <div class="tabs" :class="`tabs--${color}`">
    <nav class="tabs__items">
      <ul class="tabs__list">
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="`${className}__tabs-item tabs__item tabs__item--${size} ${
            tab.isActive ? 'tabs__item--active' : ''
          }`"
          @click="handleTabClick(tab)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TabsComponent',
  props: {
    color: {
      type: String,
    },
    tabs: {
      type: Array,
      required: true,
    },
    className: {
      type: String,
    }
    ,
    size: {
      type: String,
    }
  },

  methods: {
    handleTabClick(clickedTab) {
      this.tabs.forEach((tab) => {
        if (tab === clickedTab) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.tabs {
  &--orange & {
    &__item {
      border-radius: rem(4px);
      color: $color-button;
      background-color: $white;

      &:hover {
        transition: $transition;
        opacity: .8;
      }

      &--active {
        color: $white;
        background-color: $color-button;
      }
    }
  }

  &__list {
    @include list-reset;

    flex-direction: row;
    column-gap: rem(19px);
  }

  &__item {
    font-size: rem($font-size-base);
    font-weight: $font-weight-medium;
    line-height: $line-height-medium;

    padding: rem($padding) rem($padding-small);

    cursor: pointer;

    &--small {
      font-size: rem($font-size-mini);
      font-weight: $font-weight-bold;

      @media #{$screen-tablet} {
        font-size: rem($font-size-base);
      }

      @media #{$screen-desktop} {
        font-size: rem($font-size-normal);
      }
    }
  }

  &__block {
    display: none;

    &--active {
      display: block;
    }
  }
}
</style>
