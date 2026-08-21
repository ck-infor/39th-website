<script>
  import LogoCard from "./LogoCard.svelte";
  const clubs = [
    {
      name: "INFOR 39th",
      logoSrc: "/assets/inforLogo.png",
      href: "https://instagram.com/infor_39th",
    },
    {
      name: "ZSISC 33rd",
      logoSrc: "/assets/zsiscLogo.png",
      href: "https://instagram.com/zsisc_33rd",
    },
    {
      name: "CKCSC 39th",
      logoSrc: "/assets/ckcscLogo.png",
      href: "https://instagram.com/ckcsc39th_diary",
    },
    {
      name: "CMIOC 33rd",
      logoSrc: "/assets/cmiocLogo.png",
      href: "https://instagram.com/cmioc_33rd",
    },
  ];
</script>

<div
  class="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-start md:gap-8"
>
  {#each clubs as club}
    <LogoCard name={club.name} logoSrc={club.logoSrc} href={club.href} />
  {/each}
</div>
