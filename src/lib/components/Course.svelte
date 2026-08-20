<script lang="ts">
  const courses = [
    {
      day: "Monday",
      title: "TBD",
      description: "TBD",
    },
    {
      day: "Tuesday",
      title: "TBD",
      description: "TBD",
    },
    {
      day: "Wednesday",
      title: "TBD",
      description: "TBD",
    },
    {
      day: "Thursday",
      title: "TBD",
      description: "TBD",
    },
    {
      day: "Friday",
      title: "TBD",
      description: "TBD",
    },
  ];

  let current = $state(0);
  let showDetails = $state(false);
  function goTo(i) {
    current = i;
    showDetails = false;
  }
  function next() {
    goTo((current + 1) % courses.length);
  }
  function prev() {
    goTo((current - 1 + courses.length) % courses.length);
  }
  function toggleDetails() {
    showDetails = !showDetails;
  }

  let dragging = $state(false);
  let dragStartX = $state(0);
  let dragDeltaX = $state(0);
  const swipeThreshold = 60;

  function onPointerDown(e) {
    dragging = true;
    dragStartX = e.clientX;
    dragDeltaX = 0;
  }
  function onPointerMove(e) {
    if (!dragging) return;
    dragDeltaX = e.clientX - dragStartX;
  }
  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    if (dragDeltaX > swipeThreshold) prev();
    else if (dragDeltaX < -swipeThreshold) next();
    dragDeltaX = 0;
  }
</script>

<svelte:window
  onpointermove={onPointerMove}
  onpointerup={onPointerUp}
  onpointercancel={onPointerUp}
/>

<section id="course" class="scroll-mt-16 border-b border-zinc-800 py-20">
  <div class="mx-auto max-w-6xl px-6">
    <p class="mt-3 text-3xl font-bold tracking-tight text-zinc-50">課程介紹</p>
    <div class="mt-6 space-y-4 text-zinc-400">
      <p class="text-2xl text-zinc-50 tracking-tight font-bold mt-3">社課</p>
      <p>
        社課是在每個禮拜五下午的第一堂課，所有社員皆需要來參加，我們的上課地點在資源大樓（夢紅樓旁）三樓的電腦教室二，會有專業的講師在社課中教授一些基礎的程式相關知識，即使之前鮮少接觸程式，也可以在社課中快速掌握相關概念！我們這學期會在社課中教學的內容主要有Python基礎語法、基礎應用，以及最後留幾堂課的時間讓社員們進行成果發表，藉這個機會互相交流、切磋！
      </p>
      <p class="text-2xl text-zinc-50 tracking-tight font-bold mt-3">放課</p>
      <p>
        放課可以說是資訊社的精華部分，我們會在每個禮拜的一到五放學後的晚上6:00 ~
        8:00跟成功、中山、景美在資源大樓三樓電腦教室二舉行，這邊的教學內容會較社課來的更為進階，多了更多實作的部分，不管你是想要來精進自己的程式技術，又或是想要來跟講師討論、切磋，甚至是想要來把講師電爛，放課都是你的不二選擇！
      </p>
    </div>
    <div class="relative mx-auto mt-12 h-80 w-full max-w-sm">
      {#each courses as course, i}
        {@const depth = (i - current + courses.length) % courses.length}
        {#if depth === 0}
          <div
            class="absolute inset-0 cursor-grab touch-none select-none active:cursor-grabbing"
            style="transform: translateX({dragging
              ? dragDeltaX
              : 0}px) rotate({dragging
              ? dragDeltaX / 25
              : 0}deg); transition: {dragging
              ? 'none'
              : 'transform 300ms ease-out'}; z-index: 30;"
            onpointerdown={onPointerDown}
          >
            <div class="perspective-distant h-full w-full">
              <div class="relative h-full w-full">
                <div
                  class="absolute inset-0 transform-3d transition-transform duration-700 motion-reduce:transition-none"
                  class:rotate-y-180={showDetails}
                >
                  <div
                    class="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-center shadow-xl backface-hidden"
                    aria-hidden={showDetails}
                  >
                    <!-- Icon placeholder -->
                    <!-- TODO: swap for a real icon, e.g. lucide-svelte or an inline SVG -->
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-lg border border-dashed border-zinc-700 text-[10px] text-zinc-500"
                    >
                      icon
                    </div>

                    <h3 class="text-xl font-semibold text-zinc-100">
                      {course.title}
                    </h3>

                    <button
                      type="button"
                      class="inline-flex w-fit items-center gap-1 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-amber-400 hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                      onclick={toggleDetails}
                      aria-expanded={showDetails}
                      tabindex={showDetails ? -1 : 0}
                    >
                      View details
                    </button>
                  </div>

                  <div
                    class="absolute inset-0 flex flex-col rounded-2xl border border-amber-400/30 bg-zinc-900 p-6 shadow-xl backface-hidden rotate-y-180"
                    aria-hidden={!showDetails}
                  >
                    <p
                      class="text-xs font-semibold uppercase tracking-widest text-amber-400"
                    >
                      {course.day}
                    </p>
                    <h3 class="mt-2 font-semibold text-zinc-100">
                      {course.title}
                    </h3>
                    <p
                      class="mt-3 flex-1 overflow-y-auto text-sm text-zinc-400"
                    >
                      {course.description}
                    </p>

                    <button
                      type="button"
                      class="mt-4 inline-flex w-fit items-center gap-1 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-amber-400 hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                      onclick={toggleDetails}
                      tabindex={showDetails ? 0 : -1}
                    >
                      ← Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {:else if depth <= 2}
          <div
            class="absolute inset-0 rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-xl"
            style="transform: translateY({depth * 14}px) scale({1 -
              depth * 0.06}); opacity: {0.55 -
              (depth - 1) *
                0.25}; transition: transform 300ms ease-out, opacity 300ms ease-out; z-index: {30 -
              depth * 10};"
            aria-hidden="true"
          ></div>
        {/if}
      {/each}
    </div>

    <!-- Controls -->
    <div class="mt-8 flex items-center justify-center gap-6">
      <div class="flex gap-2">
        {#each courses as course, i}
          <button
            type="button"
            class="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-widest transition {i ===
            current
              ? 'bg-amber-400 text-zinc-950'
              : 'text-zinc-500 hover:text-amber-400'}"
            onclick={() => goTo(i)}
            aria-current={i === current ? "true" : undefined}
          >
            {course.day.slice(0, 3)}
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>
