
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
  h1 Technique 1: Labeling
  labeling

</template>

<route lang="yaml">
  meta:
    heading: "Technique 1: Labeling"

</route>
