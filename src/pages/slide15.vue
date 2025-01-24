<template lang="pug">
slide
  .flex.flex-col.h-full
    h1 Position Independent Games
    .grid.place-content-center.grow
      .flex.flex-col.justify-center.items-center
        p.mb-3 White to move, what is the outcome of the game?
        img(src="/stalemate.png?url" width="400" height="400")
</template>

<route lang="yaml">
meta:
  heading: 'Position Independent Games'
</route>
