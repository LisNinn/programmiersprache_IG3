<!-- Forest.svelte -->
<script>
  import Tree from './Tree.svelte';
  import Sea from './Sea.svelte';

  export let width = 800;
  export let height = 400;
  export let treeCount = 30; // Number of trees
  export let seaCount = 20;  // Number of seas

  let items = [];

  function getRandomPosition(size) {
    const left = Math.random() * (width - size);
    const top = Math.random() * (height - size);
    return { left, top };
  }

  function getRandomSize(min, max) {
    return min + Math.random() * (max - min);
  }

  function isOverlap(item1, item2, size) {
    return (
      item1.left < item2.left + size &&
      item1.left + size > item2.left &&
      item1.top < item2.top + size &&
      item1.top + size > item2.top
    );
  }

  // Generate trees
  for (let i = 0; i < treeCount; i++) {
    let newItem;
    let isOverlapping;

    do {
      newItem = getRandomPosition(40); 
      isOverlapping = items.some(item => isOverlap(item, newItem, 40));
    } while (isOverlapping);

    items.push({ ...newItem, type: 'tree' });
  }

  
  for (let i = 0; i < seaCount; i++) {
    let newItem;
    let isOverlapping;

    do {
      const size = getRandomSize(20, 60); 
      newItem = { ...getRandomPosition(size), size, type: 'sea' };
      isOverlapping = items.some(item => isOverlap(item, newItem, size));
    } while (isOverlapping);

    items.push(newItem);
  }
</script>

<div class="forest" style="width: {width}px; height: {height}px;">
  {#each items as item}
    {#if item.type === 'tree'}
      <Tree left={item.left} top={item.top} size={40} />
    {:else}
      <Sea left={item.left} top={item.top} size={item.size} />
    {/if}
  {/each}
</div>

<style>
  .forest {
    position: relative;
    background-color: #92ac8a; 
  }
</style>
