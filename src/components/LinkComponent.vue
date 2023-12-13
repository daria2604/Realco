<template>
  <a class="link" :href="path">{{ text }}</a>
</template>

<script>
export default {
  name: 'LinkComponent',

  props: {
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: '/',
    }
  },
};
</script>

<style lang="scss" scoped>
.link {
  font-size: rem($font-size-small);
  line-height: $line-height-medium;
}
</style>
