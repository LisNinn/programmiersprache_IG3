<script>
    import Lamp from "./Lamp.svelte";
    export let h = 100;
    export let w = 100;
    export let lampCount;
  
    let lamps = [];
  
    for (let i = 0; i < lampCount; i++) {
      lamps.push({
        lft: Math.random() * w,
        tp: Math.random() * h,
        size: Math.floor(Math.random() * 21) + 5, // Random size between 5 and 25 pixels
      });
    }
  </script>
  
  <div class="dancefloor" style="width:{w}px; height:{h}px;">
    {#each lamps as lamp}
      <Lamp links={lamp.lft} oben={lamp.tp} size={lamp.size} />
    {/each}
  </div>
  
  <style>
    .dancefloor {
      background-color: rgb(0, 0, 0);
      border: 4px solid #838de6;
      border-radius: 10px;
      position: relative;
    }
  </style>
  