<!-- Disco.svelte -->
<script>
    import Dancefloor from "./Dancefloor.svelte";
  
    let discoCount = Math.floor(Math.random() * 4) + 2; // Random number of discos between 2 and 5
    let discos = Array.from({ length: discoCount }, () => {
      return {
        width: Math.floor(Math.random() * 400) + 100, // Random width between 100 and 500
        height: Math.floor(Math.random() * 400) + 100, // Random height between 100 and 500
        lampCount: Math.floor(Math.random() * 100) + 50, // Random lamp count between 50 and 150
      };
    });
  </script>
  
  {#each discos as { width, height, lampCount }}
    <Dancefloor w={width} h={height} lampCount={lampCount} />
  {/each}
  