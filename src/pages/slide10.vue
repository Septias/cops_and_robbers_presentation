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
  h1 Corolarry 2: Length of a game
  proof2
</template>
