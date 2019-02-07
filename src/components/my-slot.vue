<template>
  <div class="my-slot">
    <div class="my-slot--header">
      COMPONENTE EXPLICANDO MY SLOT
      <slot name="header"/>
    </div>
    <div class="my-slot--content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
 .my-slot {
   margin: 8px;
   border-radius: 4px;
   border: 1px solid rgba(0, 0, 0, 0.6)
 }
 .my-slot > .my-slot--header {
   color: white;
   padding: 4px 8px;
   background-color: blue;
 }
 .my-slot > .my-slot--content {
   padding: 8px;
 }
 .my-slot > .my-slot--content > div
 .my-slot > .my-slot--content > a {
   padding: 8px;
   border: 1px solid rgba(0, 0, 255, 0.6)
 }
</style>
