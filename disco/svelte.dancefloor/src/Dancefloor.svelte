<!-- Dancefloor.svelte -->
<script>
  import { onMount, afterUpdate } from 'svelte';

  import Lamp from "./Lamp.svelte";
  export let h = 100;
  export let w = 100;
  export let lampCount;

  let lamps = [];

  const generateLamps = () => {
    lamps = [];

    for (let i = 0; i < lampCount; i++) {
      let lampSize = Math.floor(Math.random() * 21) + 5; // Random size between 5 and 25 pixels

      let lampPosition = {
        lft: Math.random() * (w - lampSize),
        tp: Math.random() * (h - lampSize),
        size: lampSize,
      };

      lamps.push(lampPosition);
    }
  };

  onMount(generateLamps); // Generate lamps on component mount
  afterUpdate(generateLamps); // Generate lamps whenever lampCount or other relevant properties change
</script>

<div class="dancefloor" style="width:{w}px; height:{h}px; position: relative; overflow: hidden;">
  {#each lamps as { lft, tp, size }}
    <Lamp links={lft} oben={tp} size={size} />
  {/each}
</div>

<style>
  .dancefloor {
    background-color: rgb(0, 0, 0);
    border: 4px solid #838de6;
    border-radius: 10px;
  }
</style>
