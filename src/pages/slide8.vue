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
  h1 Theorem 1: Winning strategy under the Gamae State Relation
  .modal.mt-20
    proof1

  ul
    li The definition of $\preceq$ is similar to the labelling procedure described in Section 2, except that the indices in the sequence take into account a move
      i  by each player.
</template>
