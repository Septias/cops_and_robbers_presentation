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
  h1 Corollary 2: Length of a Game
  theorem2.modal

  proof2
</template>
