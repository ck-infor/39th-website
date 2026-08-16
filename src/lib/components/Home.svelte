<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
</script>

<section
  id="home"
  class="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center border-b border-zinc-800"
>
  <div
    class="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center"
  >
    <div>
      <p
        class="mb-4 text-sm font-medium uppercase tracking-widest text-amber-400"
      >
        INFOR 39th
      </p>
      <h1
        class="text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
      >
        建國中學資訊社
      </h1>
      <p class="mt-6 max-w-xl text-lg text-zinc-400">
        「在無盡的淬鍊中，打造出無瑕的程式碼」
      </p>
    </div>

    <div
      class="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl text-center text-sm text-zinc-500"
    >
      <a href="https://instagram.com/infor_39th">
        <img src={favicon} alt="logo" />
      </a>
    </div>
  </div>
</section>
