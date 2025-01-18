
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
  h1 Notation
  notation
</template>

<route lang="yaml">
  meta:
    heading: Notation
</route>
