<template>
  <div ref="container" class="bg-gray-50 h-[300px] w-[400px] grid grid-cols-3 grid-rows-8 gap-2 p-2">
    <nav data-swapy-no-drag class="bg-blue-600 col-span-3">nav</nav>
    <div data-swapy-slot="one" class="col-span-2 row-span-3">
      <div data-swapy-item="task" class="bg-blue-400 h-full">task</div>
    </div>
    <div data-swapy-slot="two" class="col-span-1 row-span-3">
      <div data-swapy-item="timer" class="bg-blue-400 h-full">timer</div>
    </div>
    <div data-swapy-slot="three" class="col-span-1 row-span-3">
      <div data-swapy-item="notes" class="bg-blue-400 h-full">notes</div>
    </div>
    <div data-swapy-slot="four" class="col-span-2 row-span-3">
      <div data-swapy-item="current" class="bg-blue-400 h-full">current</div>
    </div>
    <footer data-swapy-no-drag class="bg-blue-600 col-span-3">footer</footer>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'
import { createSwapy } from 'swapy'
const swapy = ref(null)
const container = useTemplateRef('container')
onMounted(() => {
  if (container.value) swapy.value = createSwapy(container.value)
})
onUnmounted(() => {
  swapy.value?.destroy()
})
</script>