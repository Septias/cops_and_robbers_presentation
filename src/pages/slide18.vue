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
  .p-2
    h1 Algorithm for finding the winning strategy in special graphs under the relation
    theorem5.modal
    proof5
</template>


<route lang="yaml">
meta:
  heading: 'Algorithm for finding a winning strategy'
</route>
