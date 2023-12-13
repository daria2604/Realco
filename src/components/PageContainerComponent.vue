<template>
  <main class="page__content content final page__content--final">
    <div class="container">
      <div class="content_box">
        <header class="content__header content__header--final">
          <BreadcrumbsComponent :breadcrumbs="breadcrumbs" />
          <h1>{{ heading }}</h1>
        </header>
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
import BreadcrumbsComponent from './BreadcrumbsComponent.vue';

export default {
  name: 'PageContainerComponent',
  components: { BreadcrumbsComponent },
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
</style>
