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
  h1 Technique 2: Game State Relation
  game-state-relation

  ul
    li The definition of $\preceq$ is similar to the labelling procedure, except that the indices in the sequence take into account a move
      i  by each player.
</template>

<route lang="yaml">
meta:
  heading: 'Technique 2: Game State Relation'
</route>
