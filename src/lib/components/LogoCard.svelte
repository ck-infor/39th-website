<script>
  // Svelte 5 runes (this project forces runes mode — see vite.config.ts)

  // TODO: pass real values in, e.g.
  // <ClubLogoCard name="Your Club's Full Name" logoSrc="/logo.png" href="https://instagram.com/yourclub" />
  let { name = "Club Full Name", logoSrc = "", href = "#" } = $props();
</script>

<div
  class="mx-auto flex w-full max-w-[220px] flex-col items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-center"
>
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block aspect-square w-32 overflow-hidden rounded-xl border border-zinc-700 transition hover:border-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
    aria-label={`Visit ${name}'s social page`}
  >
    {#if logoSrc}
      <img
        src={logoSrc}
        alt="{name} logo"
        class="h-full w-full object-cover transition group-hover:scale-105"
      />
    {:else}
      <!-- TODO: pass a logoSrc prop, or replace this block with a real <img> -->
      <div
        class="flex h-full w-full items-center justify-center bg-zinc-900/50 text-center text-xs text-zinc-500"
      >
        Logo<br />1:1
      </div>
    {/if}

    <!-- External-link cue, shown on hover/focus -->
    <span
      class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950/80 text-zinc-300 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="h-3 w-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 17 17 7M9 7h8v8"
        />
      </svg>
    </span>
  </a>

  <p class="font-semibold text-zinc-100">{name}</p>
</div>
