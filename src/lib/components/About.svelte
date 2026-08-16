<script lang="ts">
  let { id, title, content } = $props();
  import infor from "$lib/assets/infor.png";
</script>

<section {id} class="scroll-mt-16 border-b border-zinc-800 py-20">
  <div
    class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center"
  >
    <div
      class="order-2 flex aspect-[4/3] items-center justify-center rounded-2xl text-center text-sm text-zinc-500 md:order-1"
    >
      <img src={infor} alt="infor" class="rounded-2xl" />
    </div>
    <div class="order-1 md:order-2">
      <p class="mt-3 text-3xl font-bold tracking-tight text-zinc-50">{title}</p>
      <div class="mt-6 space-y-4 text-zinc-400">
        <p>{content}</p>
      </div>
    </div>
  </div>
</section>
