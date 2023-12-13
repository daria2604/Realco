<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li
        class="breadcrumbs__item"
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        :class="isActive(index) ? 'breadcrumbs__item--active': ''"
      >
        <router-link
          :to="breadcrumb.path"
          class="breadcrumbs__link"
          @click="selected(breadcrumb.page)"
        >
          {{ breadcrumb.page }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbsComponent',
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isActive(index) {
      return index === this.breadcrumbs.length - 1;
    },

    selected(breadcrumb) {
      this.$emit('selected', breadcrumb);
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &__list {
    @include list-reset;

    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  &__item {
    position: relative;

    display: flex;
    align-items: center;

    padding: 0 rem(23px);

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  &__item--active & {
    &__link {
      color: $slate-gray;

      &:visited {
        color: $slate-gray;
      }

      &:hover {
        text-decoration: none;
      }

      &::after {
        display: none;
      }
    }
  }

  &__item:first-child & {
    &__link {
      &::before {
        display: none;
      }
    }
  }

  &__link {
    font-size: rem($font-size-small);
    line-height: 2;

    display: block;

    text-decoration: none;

    color: $heather;

    @media #{$screen-tablet} {
      font-size: rem($font-size-base);
    }

    &:visited {
      color: $heather;
    }

    &:hover {
      transition: $transition;
      color: $slate-gray;
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;

      width: rem(6px);
      height: rem(10px);

      transform: translateY(-50%);

      background-image: url(~@/assets/images/icons/arrow-breadcrumbs.svg);
      background-repeat: no-repeat;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: rem(-6px);
    }
  }
}
</style>
