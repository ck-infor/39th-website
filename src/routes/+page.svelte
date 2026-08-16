<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import About from "$lib/components/About.svelte";
  import Home from "$lib/components/Home.svelte";
  import Events from "$lib/components/Events.svelte";
  import Course from "$lib/components/Course.svelte";
</script>

<svelte:head>
  <title>INFOR 39th</title>
  <meta
    name="description"
    content="TODO: one-line summary of who you are and what you do."
  />
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
  <a
    href="#home"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-amber-400 focus:px-4 focus:py-2 focus:font-medium focus:text-zinc-950"
  >
    INFOR 39th
  </a>
  <Nav />
  <main class="pt-16">
    <Home />
    <About
      id="about"
      title="社團簡介"
      content="建中資訊社是一個專注於電腦和資訊科技的學術性社團。在這裡，你可以學習程式設計、演算法、網頁開發、人工智慧等科技領域的課程。除此之外，你還可以認識許多學術力一流的同儕，並與友校的朋友交流。"
    />
    <Course />
    <Events />
  </main>

  <footer class="border-t border-zinc-800 py-8">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-xs text-zinc-500 sm:flex-row sm:justify-between"
    >
      <p>&copy; INFOR 39th</p>
    </div>
  </footer>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }
  }
</style>
