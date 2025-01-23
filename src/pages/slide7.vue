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
  h1 Theorem 1: Winning Strategy Under the Game State Relation
  .modal
    theorem1

  proof1
</template>
