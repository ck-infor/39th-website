<script lang="ts">
  let { id, title, content } = $props();
</script>

<section {id} class="scroll-mt-16 border-b border-zinc-800 py-20">
  <div
    class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center"
  >
    <div
      class="order-2 flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/50 text-center text-sm text-zinc-500 md:order-1"
    >
      Image / media placeholder<br />4:3
    </div>
    <div class="order-1 md:order-2">
      <p class="mt-3 text-3xl font-bold tracking-tight text-zinc-50">{title}</p>
      <div class="mt-6 space-y-4 text-zinc-400">
        <p>{content}</p>
      </div>
    </div>
  </div>
</section>
