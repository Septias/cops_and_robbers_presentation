<script lang="ts" setup>
onUpdated(() => {
  // @ts-expect-error idk
  MathJax.typeset()
})
onMounted(() => {
  // @ts-expect-error idk
  MathJax.typeset()
  console.log('mounted')
})
</script>

<template lang="pug">
slide
  h1 Linking Labelling and sequence of relations
  proof3
</template>
