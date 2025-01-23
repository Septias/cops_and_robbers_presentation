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
  h1 Game Rules
  ol
    li There are two players named the Pursuer and the Evader.
    li There is perfect information.

  rules.flex.justify-center
</template>

<route lang="yaml">
meta:
  heading: Game Rules
</route>

