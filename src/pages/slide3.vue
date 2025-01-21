
<script lang="ts" setup>
onUpdated(() => {
  // @ts-expect-error idk
  MathJax.typeset()
})
onMounted(() => {
  // @ts-expect-error idk
  MathJax.typeset()

})
</script>


<template lang="pug">
slide
  h1 Motivation
  .grid.place-content-center.grow
    motivation
</template>

<route lang="yaml">
meta:
  heading: Motivation
</route>
