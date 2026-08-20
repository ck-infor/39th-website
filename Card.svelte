<script lang="ts">
  export let cards: {
    name: string;
    logo?: string;
    href?: string;
  }[] = [];
</script>

<div class="card-group">
  {#each cards as card}
    <a class="card" href={card.href ?? "#"}>
      <div class="logo">
        {#if card.logo}
          <img src={card.logo} alt={`${card.name} logo`} />
        {:else}
          <div class="logo-placeholder"></div>
        {/if}
      </div>

      <div class="name">{card.name}</div>
    </a>
  {/each}
</div>

<style>
  .card-group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px;
    color: inherit;
    text-decoration: none;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #fff;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease,
      transform 0.15s ease;
  }

  .card:hover {
    border-color: #d1d5db;
    box-shadow: 0 4px 12px rgb(0 0 0 / 8%);
    transform: translateY(-2px);
  }

  .logo {
    width: 64px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 10px;
    background: #f3f4f6;
  }

  .logo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .logo-placeholder {
    width: 100%;
    height: 100%;
  }

  .name {
    width: 100%;
    overflow: hidden;
    color: #111827;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

