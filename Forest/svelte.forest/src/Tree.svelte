<!-- Tree.svelte -->

<script>
  export let left;
  export let top;
  export let size = 40; // Default size
</script>

<div class="tree" style="top: {top}px; left: {left}px; width: {size}px; height: {size}px;">
  <img src="src/assets/Tree.png" alt="Tree" style="width: 100%; height: 100%; object-fit: contain;">
</div>

<style>
  .tree {
    position: absolute;
  }
</style>

