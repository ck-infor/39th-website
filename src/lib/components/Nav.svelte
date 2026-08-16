<script lang="ts">
  let menuOpen = $state(false);

  const navLinks = [
    { href: "#about", label: "社團簡介" },
    { href: "#course", label: "課程介紹" },
    { href: "#events", label: "活動介紹" },
  ];

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header
  class="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur"
>
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <a href="#home" class="text-lg font-semibold tracking-tight text-zinc-100">
      INFOR 39th
    </a>

    <ul class="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="rounded-sm outline-none transition-colors hover:text-amber-400 focus-visible:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Mobile toggle -->
    <button
      type="button"
      class="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-900 md:hidden"
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      onclick={() => (menuOpen = !menuOpen)}
    >
      {#if menuOpen}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        </svg>
      {/if}
    </button>
  </nav>

  <!-- Mobile menu -->
  {#if menuOpen}
    <ul
      class="flex flex-col gap-1 border-t border-zinc-800 bg-zinc-950 px-6 py-4 text-sm text-zinc-300 md:hidden"
    >
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="block rounded-md px-2 py-2 hover:bg-zinc-900 hover:text-amber-400"
            onclick={closeMenu}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</header>
