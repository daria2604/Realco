<template>
  <div class="input input--search header__search">
    <button class="button button--simple input__button" type="button">
      <span class="button__icon button__icon--medium">
        <SvgIconComponent :name="`search`" />
      </span>
    </button>
    <input
      type="text"
      class="input__control input__control--search"
      name="text"
      id="text"
      placeholder="Search..."
    />
  </div>
</template>

<script>
import SvgIconComponent from './SvgIconComponent.vue';

export default {
    name: "SearchComponent",
    components: { SvgIconComponent }
};
</script>

<style lang="scss">
.input {
  &--search {
    display: flex;
    align-items: center;
    column-gap: rem(5px);

    padding: rem(8px) rem($padding-small);

    border-top: rem(1px) solid rgba($heather, .5);

    @media #{$screen-tablet} {
      padding-left: rem($padding);
      padding-right: rem($padding);
      
      border: $input-border;
      border-radius: $border-radius-default;

      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: $input-focus;
      }
    }
  }

  &__control {
    letter-spacing: rem(.14px);

    width: 100%;
    padding: rem(17px) rem($padding-small);

    border: $input-border;
    border-radius: $border-radius-default;

    background: transparent;

    &:focus,
    &:focus-visible {
      outline: $input-focus;
    }

    &::placeholder {
      color: $heather;
    }

    &--disabled {
      background-color: $athens-grey;
    }

    &--search {
      padding: 0;

      border: none;

      &:focus,
      &:focus-visible {
        outline: none;
      }
    }
  }

  &__button {
      color: $slate-gray;
  }
}
</style>
