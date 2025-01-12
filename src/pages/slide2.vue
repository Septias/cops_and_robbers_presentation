<script lang="ts" setup>
const router = useRouter()
const slides = router.getRoutes().filter(r => r.meta.heading).sort((a, b) => Number(a.name!.toString().substring(5)) - Number(b.name!.toString().substring(5))).map(r => ({ heading: r.meta.heading, path: r.path }))
</script>

<template lang="pug">
slide
  h1 Structure
  ul
    li(v-for="slide in slides" :key="slide.path")
      router-link(:to="slide.path") {{ slide.heading }}
</template>
