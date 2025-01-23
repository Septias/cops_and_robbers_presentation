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
  h1 Technique 1: Labelling
  labelling.modal
  ul
    li
      | The
      em  intuition
      |  behind the labels is that the Pursuer’s optimal strategy is to move so that the game
      em  is over as quickly as possible
      | , and the Evader’s optimal strategy is to move so the game
      em  lasts as long as possible
      | .
    li
      | It is straightforward to prove by induction that the final labels are the
      em  number of moves that the game will last
      |  from a given position, assuming both sides
      em  play optimally
      |.

</template>

<route lang="yaml">
  meta:
    heading: "Technique 1: Labelling"
</route>
