<template>
  <main class="flex flex-col bg-neutral-950 h-[300px] w-[400px] gap-2 p-4">
    <nav class="font-bold text-gray-50/60">

    </nav>
    <div ref="container" class="h-full grid grid-cols-3 grid-rows-6 gap-3">
      <div data-swapy-slot="one" class="col-span-2 row-span-3 rounded-md bg-neutral-800/20">
        <div data-swapy-item="task"
          class="h-full w-full overflow-hidden rounded-md border border-gray-100/20 hover:border-slate-800 transition-colors duration-300 from-neutral-950 to-neutral-800 to-90% hover:to-slate-800 bg-gradient-to-tr">
        </div>
      </div>
      <div data-swapy-slot="two" class="col-span-1 row-span-3 rounded-md bg-neutral-800/20">
        <div data-swapy-item="timer"
          class="h-full w-full overflow-hidden rounded-md border border-gray-100/20 hover:border-slate-800 transition-colors duration-300 from-neutral-950 to-neutral-800 to-90% hover:to-slate-800 bg-gradient-to-tr">
        </div>
      </div>
      <div data-swapy-slot="three" class="col-span-1 row-span-3 rounded-md bg-neutral-800/20">
        <div data-swapy-item="notes"
          class="h-full w-full overflow-hidden rounded-md border border-gray-100/20 hover:border-slate-800 transition-colors duration-300 from-neutral-950 to-neutral-800 to-90% hover:to-slate-800 bg-gradient-to-tr" />
      </div>
      <div data-swapy-slot="four" class="col-span-2 row-span-3 rounded-md bg-neutral-800/20">
        <div data-swapy-item="current"
          class="h-full w-full overflow-hidden rounded-md border border-gray-100/20 hover:border-slate-800 transition-colors duration-300 from-neutral-950 to-neutral-800 to-90% hover:to-slate-800 bg-gradient-to-tr">
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'
import { createSwapy } from 'swapy'
const swapy = ref(null)
const container = useTemplateRef('container')
onMounted(() => {
  if (container.value) swapy.value = createSwapy(container.value)
})
onUnmounted(() => {swapy.value?.destroy()})
</script>