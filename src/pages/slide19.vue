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
  h1 Application of the algorithm in reflexive graphs
  .px-5
    proof6
</template>
