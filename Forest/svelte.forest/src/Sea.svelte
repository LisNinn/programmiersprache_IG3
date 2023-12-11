<!-- Sea.svelte -->
<script>
    export let left;
    export let top;
    export let size = 40; // Default size
  </script>
  
  <div class="sea" style="top: {top}px; left: {left}px; width: {size}px; height: {size}px;"></div>
  
  <style>
    .sea {
      position: absolute;
      background: linear-gradient(to bottom, #87CEEB, #5F9EA0); /* Adjust the gradient colors */
      border-radius: 50%; /* Make it round */
    }
  </style>
  