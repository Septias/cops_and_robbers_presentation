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
  h1 Game State Relation
  game-state-relation

</template>

<route lang="yaml">
meta:
  heading: 'The SimpleNix Algorithm'
</route>
