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
  h1 Definition: Game length
  game-length
</template>

<route lang="yaml">
meta:
  heading: 'Definition: Game length'

</route>
